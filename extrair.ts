import * as cheerio from 'cheerio';

async function extrairDados() {
  try {
    const response = await fetch('https://nzdcontabilidade.com.br/');
    const html = await response.text();
    const $ = cheerio.load(html);

    console.log("=== TÍTULOS ===");
    $('h1, h2, h3').each((i, el) => {
      const text = $(el).text().trim().replace(/\s+/g, ' ');
      if(text.length > 5) console.log(text);
    });

    console.log("\n=== PARÁGRAFOS ===");
    $('p').each((i, el) => {
      const text = $(el).text().trim().replace(/\s+/g, ' ');
      if(text.length > 20) console.log(text);
    });

  } catch (error) {
    console.error("Erro ao extrair:", error);
  }
}

extrairDados();