import * as cheerio from 'cheerio';

async function extrairRodape() {
  try {
    const response = await fetch('https://nzdcontabilidade.com.br/');
    const html = await response.text();
    const $ = cheerio.load(html);

    console.log("=== LINKS SOCIAIS ===");
    $('a[href*="instagram.com"], a[href*="youtube.com"], a[href*="facebook.com"], a[href*="linkedin.com"]').each((i, el) => {
      console.log($(el).attr('href'));
    });

    console.log("\n=== TEXTOS RODAPÉ (Contato/Endereço) ===");
    // Tenta pegar áreas comuns de rodapé
    $('footer, .footer, .socket').find('p, span, div, li, a').each((i, el) => {
      const text = $(el).text().trim().replace(/\s+/g, ' ');
      if(text.length > 10) console.log(text);
    });

  } catch (error) {
    console.error("Erro:", error);
  }
}

extrairRodape();