import * as cheerio from 'cheerio';

async function testScrape() {
  const res = await fetch('https://www.contabeis.com.br/conteudo/tributario/');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const links = $('a[href*="noticias/"]').map((i, el) => $(el).attr('href')).get();
  console.log('Links:', links.slice(0, 5));
}
testScrape();