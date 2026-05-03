import * as cheerio from 'cheerio';

async function testScrape4() {
  const res = await fetch('https://www.gov.br/receitafederal/pt-br/assuntos/noticias');
  const html = await res.text();
  const $ = cheerio.load(html);
  
  const links = $('a').map((i, el) => $(el).text()).get().filter(t => t.toLowerCase().includes('serviço'));
  console.log(links);
}
testScrape4();