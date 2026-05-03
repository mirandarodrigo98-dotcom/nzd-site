import * as cheerio from 'cheerio';

async function testScrape2() {
  const res = await fetch('https://www.gov.br/receitafederal/pt-br/assuntos/noticias');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const links = $('a[href*="noticias/2026"]').map((i, el) => $(el).attr('href')).get();
  console.log('RFB Links:', links.slice(0, 5));
}
testScrape2();