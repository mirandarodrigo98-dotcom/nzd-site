import { prisma } from './src/lib/prisma';
async function run() {
  const n = await prisma.noticia.findMany();
  console.log(n.length, n.map(x => x.titulo));
}
run();