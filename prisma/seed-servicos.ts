import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const servicos = [
    {
      titulo: "Gestão Contábil",
      descricao: "Com o compromisso na gestão contábil e empresarial, o setor classifica, organiza, contabiliza e analisa todas as operações dos clientes.",
      icone: "BarChart3",
      ordem: 1
    },
    {
      titulo: "Assessoria Fiscal",
      descricao: "O Departamento Fiscal realiza mensalmente todas as obrigações principais e acessórias exigidas pelo fisco federal, estadual e municipal.",
      icone: "Calculator",
      ordem: 2
    },
    {
      titulo: "Departamento Pessoal",
      descricao: "Executamos todas as tarefas ligadas à legislação trabalhista e previdenciária com tecnologia de ponta e estratégia adequada.",
      icone: "Users",
      ordem: 3
    },
    {
      titulo: "Legalização",
      descricao: "Nossa equipe societária tem competência e agilidade necessária para a execução dos serviços de formalização de empresas e prova de regularidade.",
      icone: "Building2",
      ordem: 4
    },
    {
      titulo: "BPO Financeiro",
      descricao: "Terceirize seus serviços de contas a pagar e receber. Inovação e tecnologia na administração financeira proporcionam segurança e conforto.",
      icone: "Banknote",
      ordem: 5
    },
    {
      titulo: "Recuperação Tributária",
      descricao: "Método para recuperar impostos, taxas e contribuições pagos indevidamente ou de forma errônea. Restituição de impostos de forma legal.",
      icone: "RefreshCcw",
      ordem: 6
    },
    {
      titulo: "Contabilidade Médica",
      descricao: "Serviço que aplica princípios contábeis na prática médica, englobando a administração das finanças, receitas, despesas e questões fiscais.",
      icone: "Stethoscope",
      ordem: 7
    },
    {
      titulo: "Perícia Judicial",
      descricao: "Assistência em perícias judiciais com conhecimento em contabilidade e tributos. Contribuímos na elaboração de quesitos e Parecer Técnico.",
      icone: "Scale",
      ordem: 8
    }
  ];

  console.log('Iniciando cadastro dos serviços reais...');

  for (const s of servicos) {
    const existe = await prisma.servico.findFirst({ where: { titulo: s.titulo } });
    if (!existe) {
      await prisma.servico.create({ data: s });
      console.log(`Serviço cadastrado: ${s.titulo}`);
    }
  }

  console.log('Serviços reais cadastrados com sucesso!');
}

main()
  .catch((e) => {
    console.error('Erro ao popular serviços:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });