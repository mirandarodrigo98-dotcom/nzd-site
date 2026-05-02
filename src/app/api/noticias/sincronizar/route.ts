import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import Parser from 'rss-parser';

const parser = new Parser();

// URLs baseadas nas referências fornecidas
const FEEDS = [
  { 
    url: 'https://www.contabeis.com.br/rss/', 
    fonte: 'Portal Contábeis' 
  },
  { 
    url: 'https://www.gov.br/receitafederal/pt-br/assuntos/noticias/RSS', 
    fonte: 'Receita Federal' 
  }
];

export async function GET() {
  try {
    let noticiasSalvas = 0;

    for (const feed of FEEDS) {
      try {
        const parsed = await parser.parseURL(feed.url);

        // Pega os 10 itens mais recentes do feed
        for (const item of (parsed.items || []).slice(0, 10)) {
          if (!item.link || !item.title) continue;

          // Verifica se a notícia já existe no nosso banco (pelo link)
          const existe = await prisma.noticia.findFirst({
            where: { url_origem: item.link }
          });

          if (!existe) {
            await prisma.noticia.create({
              data: {
                titulo: item.title,
                resumo: item.contentSnippet || item.content || '',
                conteudo: item.content || item.contentSnippet || '',
                url_origem: item.link,
                fonte: feed.fonte,
                data_publicacao: item.isoDate ? new Date(item.isoDate) : new Date(),
              }
            });
            noticiasSalvas++;
          }
        }
      } catch (feedErro) {
        console.error(`Erro ao ler o feed ${feed.fonte}:`, feedErro);
        // Continua para o próximo feed mesmo se um falhar
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