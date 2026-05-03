import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const senhaCriptografada = await bcrypt.hash('Mudar123!', 10);
  
  await prisma.usuario.upsert({
    where: { email: 'rodrigo@nzdcontabilidade.com.br' },
    update: {},
    create: {
      nome: 'Rodrigo Miranda',
      email: 'rodrigo@nzdcontabilidade.com.br',
      senha: senhaCriptografada,
    },
  });
  console.log('Usuário admin recriado.');
}
main().catch(console.error).finally(() => prisma.$disconnect());