import * as cheerio from 'cheerio';

async function extrairLinks() {
  try {
    const response = await fetch('https://nzdcontabilidade.com.br/');
    const html = await response.text();
    const $ = cheerio.load(html);

    console.log("=== LINKS MENU ===");
    $('nav a, .menu a').each((i, el) => {
      const text = $(el).text().trim().replace(/\s+/g, ' ');
      const href = $(el).attr('href');
      if(text.length > 2) console.log(`${text} -> ${href}`);
    });

  } catch (error) {
    console.error("Erro ao extrair:", error);
  }
}

extrairLinks();