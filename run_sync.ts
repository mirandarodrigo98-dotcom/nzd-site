import { GET } from './src/app/api/noticias/sincronizar/route';

async function run() {
  const res = await GET();
  const data = await res.json();
  console.log(data);
}
run();