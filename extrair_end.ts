import * as cheerio from 'cheerio';

async function extrairEnd() {
  try {
    const response = await fetch('https://nzdcontabilidade.com.br/');
    const html = await response.text();
    const $ = cheerio.load(html);

    console.log("=== ENDERECO HOME ===");
    $('body').find('p, span, h1, h2, h3, h4, h5').each((i, el) => {
      const text = $(el).text().trim().replace(/\s+/g, ' ');
      if (text.toLowerCase().includes('rua') || 
          text.toLowerCase().includes('bairro') || 
          text.toLowerCase().includes('cep') || 
          text.toLowerCase().includes('volta redonda')) {
        console.log(text);
      }
    });

  } catch (error) {
    console.error("Erro:", error);
  }
}

extrairEnd();