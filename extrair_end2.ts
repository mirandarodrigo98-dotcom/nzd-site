import * as cheerio from 'cheerio';

async function extrairEnd2() {
  try {
    const response = await fetch('https://nzdcontabilidade.com.br/contato/');
    const html = await response.text();
    const $ = cheerio.load(html);

    console.log("=== HTML CONTATO ===");
    console.log($.html());
  } catch (error) {}
}
extrairEnd2();