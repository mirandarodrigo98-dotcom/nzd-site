import { GET } from './src/app/api/noticias/sincronizar/route';
async function test() {
  const res = await GET();
  const j = await res.json();
  console.log(j);
}
test();