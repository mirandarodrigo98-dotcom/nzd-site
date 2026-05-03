import * as cheerio from 'cheerio';

async function testScrape3() {
  const res = await fetch('https://www.gov.br/receitafederal/pt-br/assuntos/noticias');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const h2s = $('h2 a').map((i, el) => $(el).attr('href')).get();
  console.log(h2s.slice(0, 3));
}
testScrape3();