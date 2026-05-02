import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'rodrigo@nzdcontabilidade.com.br';
  const senhaPlana = 'Mudar123!';
  
  // Por segurança, nunca salvamos a senha em texto limpo.
  // Criamos um "hash" criptografado da senha.
  const senhaHash = await bcrypt.hash(senhaPlana, 10);

  const usuario = await prisma.usuario.upsert({
    where: { email },
    update: {},
    create: {
      nome: 'Rodrigo Miranda',
      email,
      senha: senhaHash,
    },
  });

  console.log('✅ Usuário administrador criado com sucesso!');
  console.log(`📧 E-mail: ${usuario.email}`);
}

main()
  .catch((e) => {
    console.error('❌ Erro ao criar usuário:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });