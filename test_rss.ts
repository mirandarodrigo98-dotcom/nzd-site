import Parser from 'rss-parser';

async function testRSS() {
  const parser = new Parser();
  try {
    const parsed = await parser.parseURL('https://www.contabeis.com.br/rss/');
    console.log(parsed.items.map(i => i.categories || i.title));
  } catch (e) {
    console.error(e);
  }
}
testRSS();