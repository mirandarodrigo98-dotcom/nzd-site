import * as cheerio from 'cheerio';

async function extrairContato() {
  try {
    const response = await fetch('https://nzdcontabilidade.com.br/contato/');
    const html = await response.text();
    const $ = cheerio.load(html);

    console.log("=== PÁGINA CONTATO ===");
    $('body').find('p, span, h1, h2, h3, h4, h5').each((i, el) => {
      const text = $(el).text().trim().replace(/\s+/g, ' ');
      if (text.toLowerCase().includes('rua') || 
          text.toLowerCase().includes('avenida') || 
          text.toLowerCase().includes('cep') || 
          text.toLowerCase().includes('contato') ||
          text.toLowerCase().includes('telefone') ||
          text.toLowerCase().includes('whatsapp') ||
          text.includes('(')) {
        console.log(text);
      }
    });

  } catch (error) {
    console.error("Erro:", error);
  }
}

extrairContato();