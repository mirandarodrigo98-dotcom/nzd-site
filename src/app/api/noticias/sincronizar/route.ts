import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import * as cheerio from 'cheerio';

// Função para converter título em slug amigável
function slugify(text: string) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Substitui espaços por -
    .replace(/[^\w\-]+/g, '')       // Remove caracteres não-alfanuméricos
    .replace(/\-\-+/g, '-')         // Substitui múltiplos - por um único
    .replace(/^-+/, '')             // Remove - do início
    .replace(/-+$/, '');            // Remove - do fim
}

async function scrapeContabeis(url: string, fonte: string) {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    // Pega o primeiro link real de notícia
    const links = $('a[href*="noticias/"]').map((i, el) => $(el).attr('href')).get().filter(h => h.length > 15);
    if (!links.length) {
      console.log('Nenhum link encontrado em:', url);
      return null;
    }
    let href = links[0];
    if (!href.startsWith('http')) {
      href = 'https://www.contabeis.com.br/' + href.replace(/^\//, '');
    }

    // Busca os dados da página interna da notícia
    const resInterna = await fetch(href);
    const htmlInterno = await resInterna.text();
    const $int = cheerio.load(htmlInterno);

    const titulo = $int('h1').first().text().trim();
    const resumo = $int('h2.linha-fina').first().text().trim() || $int('.texto p').first().text().trim();
    
    // Extrai o conteúdo (pega os parágrafos do artigo)
    let conteudoHTML = '';
    $int('.texto p').each((i, el) => {
      const texto = $int(el).text().trim();
      if (texto) {
        conteudoHTML += `<p class="mb-4 text-gray-700 leading-relaxed">${texto}</p>`;
      }
    });

    if (!titulo || !conteudoHTML) {
      console.log('Falha ao pegar titulo ou conteudo:', url, titulo);
      return null;
    }

    return {
      titulo,
      resumo,
      conteudo: conteudoHTML,
      url_origem: href,
      fonte: fonte,
      data_publicacao: new Date(),
    };
  } catch (error) {
    console.error(`Erro ao fazer scrape de ${url}:`, error);
    return null;
  }
}

async function scrapeReceita() {
  try {
    const url = 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias';
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    // Pega o link da primeira notícia
    const links = $('a[href*="noticias/2026"]').map((i, el) => $(el).attr('href')).get();
    if (!links.length) {
      console.log('Nenhum link encontrado em:', url);
      return null;
    }

    const href = links[0];

    // Busca os dados da página interna
    const resInterna = await fetch(href);
    const htmlInterno = await resInterna.text();
    const $int = cheerio.load(htmlInterno);

    const titulo = $int('h1.documentFirstHeading').first().text().trim();
    const resumo = $int('.documentDescription').first().text().trim();
    
    let conteudoHTML = '';
    $int('#parent-fieldname-text p').each((i, el) => {
      const texto = $int(el).text().trim();
      if (texto) {
        conteudoHTML += `<p class="mb-4 text-gray-700 leading-relaxed">${texto}</p>`;
      }
    });

    if (!titulo || !conteudoHTML) {
      console.log('Falha ao pegar titulo ou conteudo (RFB):', href, titulo);
      return null;
    }

    return {
      titulo,
      resumo,
      conteudo: conteudoHTML,
      url_origem: href,
      fonte: 'Receita Federal',
      data_publicacao: new Date(),
    };
  } catch (error) {
    console.error('Erro ao fazer scrape da Receita:', error);
    return null;
  }
}

export async function GET() {
  try {
    let noticiasSalvas = 0;

    // Fontes para raspar
    const fontes = [
      { promessa: scrapeContabeis('https://www.contabeis.com.br/conteudo/tributario/', 'Portal Contábeis - Tributário') },
      { promessa: scrapeContabeis('https://www.contabeis.com.br/conteudo/trabalhista/', 'Portal Contábeis - Trabalhista') },
      { promessa: scrapeReceita() }
    ];

    for (const { promessa } of fontes) {
      const noticia = await promessa;
      
      if (noticia) {
        // Verifica se a notícia já existe no banco
        const existe = await prisma.noticia.findFirst({
          where: { url_origem: noticia.url_origem }
        });

        if (!existe) {
          // Garante que o slug seja único
          let baseSlug = slugify(noticia.titulo);
          let slug = baseSlug;
          let counter = 1;
          while (await prisma.noticia.findUnique({ where: { slug } })) {
            slug = `${baseSlug}-${counter}`;
            counter++;
          }

          await prisma.noticia.create({
            data: {
              ...noticia,
              slug,
            }
          });
          noticiasSalvas++;
        }
      }
    }

    return NextResponse.json({ 
      sucesso: true, 
      mensagem: `${noticiasSalvas} novas notícias foram sincronizadas no banco de dados.` 
    });

  } catch (erro) {
    console.error('Erro geral ao sincronizar notícias:', erro);
    return NextResponse.json(
      { sucesso: false, erro: 'Falha ao sincronizar notícias' }, 
      { status: 500 }
    );
  }
}