import * as cheerio from 'cheerio';
async function test() {
  const res = await fetch('https://www.contabeis.com.br/noticias/76408/credito-de-icms-no-agro-exige-controle-para-virar-caixa/');
  const html = await res.text();
  const $ = cheerio.load(html);
  console.log($('article p').length);
  console.log($('.texto p').length);
  console.log($('.conteudo p').length);
}
test();