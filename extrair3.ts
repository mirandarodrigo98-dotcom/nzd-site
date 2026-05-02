import * as cheerio from 'cheerio';

async function extrairPagina(url: string, nome: string) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    console.log(`\n\n=== CONTEÚDO DA PÁGINA: ${nome} ===`);
    $('h1, h2, h3, p, li').each((i, el) => {
      const text = $(el).text().trim().replace(/\s+/g, ' ');
      if(text.length > 10) console.log(text);
    });

  } catch (error) {
    console.error(`Erro ao extrair ${nome}:`, error);
  }
}

async function run() {
  await extrairPagina('https://nzdcontabilidade.com.br/quem-somos/', 'QUEM SOMOS');
  await extrairPagina('https://nzdcontabilidade.com.br/servicos/', 'SERVIÇOS');
}

run();