import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Building2, Calculator, Users, MapPin, Phone, Mail, Banknote, RefreshCcw, Stethoscope, Scale, CheckCircle2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

// Função auxiliar para renderizar o ícone correto baseado no nome salvo no banco
function renderIcon(iconName: string | null) {
  const props = { className: "w-8 h-8 text-nzd-secondary" };
  switch (iconName) {
    case "BarChart3": return <BarChart3 {...props} />;
    case "Calculator": return <Calculator {...props} />;
    case "Users": return <Users {...props} />;
    case "Building2": return <Building2 {...props} />;
    case "Banknote": return <Banknote {...props} />;
    case "RefreshCcw": return <RefreshCcw {...props} />;
    case "Stethoscope": return <Stethoscope {...props} />;
    case "Scale": return <Scale {...props} />;
    default: return <CheckCircle2 {...props} />;
  }
}

export default async function Home() {
  // Puxa as 3 últimas notícias do banco de dados
  const ultimasNoticias = await prisma.noticia.findMany({
    orderBy: { data_publicacao: 'desc' },
    take: 3
  });

  // Puxa os serviços reais cadastrados no banco
  const servicos = await prisma.servico.findMany({
    where: { ativo: true },
    orderBy: { ordem: 'asc' },
    take: 8
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Header (Cabeçalho) */}
      <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="NZD Contabilidade" width={140} height={48} className="h-auto w-auto max-h-12" priority />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-nzd-secondary transition-colors">Início</Link>
          <Link href="#quem-somos" className="hover:text-nzd-secondary transition-colors">Quem Somos</Link>
          <Link href="#solucoes" className="hover:text-nzd-secondary transition-colors">Soluções</Link>
          <Link href="#conteudos" className="hover:text-nzd-secondary transition-colors">Conteúdos</Link>
          <Link href="#contato" className="hover:text-nzd-secondary transition-colors">Contato</Link>
        </nav>
        <button className="bg-nzd-primary hover:bg-nzd-primary/90 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm hover:shadow">
          <a href="https://nzdcontabilidade.app.questorpublico.com.br/" target="_blank" rel="noopener noreferrer">Área do Cliente</a>
        </button>
      </header>

      <main className="flex-1">
        {/* 2. Hero Section (Vitrine Principal) */}
        <section className="w-full py-24 md:py-32 px-6 md:px-12 bg-gray-50 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-nzd-primary/5 pointer-events-none"></div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-nzd-primary max-w-4xl tracking-tight mb-6 relative z-10">
            Contabilidade consultiva para impulsionar o seu negócio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10 relative z-10 leading-relaxed">
            Somos a extensão da sua empresa. Transformamos dados contábeis em estratégias claras e seguras para o seu crescimento contínuo.
          </p>
          <div className="flex gap-4">
            <Link href="#contato" className="bg-nzd-secondary hover:bg-nzd-secondary/90 text-white px-8 py-3.5 rounded-md text-base font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              Fale com um Especialista <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://nzdcontabilidade.app.questorpublico.com.br/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-gray-50 text-nzd-primary border border-gray-200 px-8 py-3.5 rounded-md text-base font-bold transition-all shadow-sm">
              Área do Cliente
            </a>
          </div>
        </section>

        {/* 3. Quem Somos (Resumo) */}
        <section id="quem-somos" className="w-full py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-3 py-1 bg-nzd-primary/10 text-nzd-primary font-semibold text-sm rounded-full mb-6">
                Sobre a NZD
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-nzd-primary mb-6 leading-tight">
                Muito mais que números. <br/>Uma parceria para o seu crescimento.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                A NZD Contabilidade tem um perfil consultivo desde sua criação. Atendemos empresas de todos os tamanhos e de diversas regiões do Brasil. Somos incansáveis na busca pela excelência em todas as nossas ações, um verdadeiro desafio diante da complexidade da legislação brasileira.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Priorizamos o crescimento técnico e humano dos nossos colaboradores, fornecendo-lhes ferramentas para o aperfeiçoamento, além de equipamentos de ponta para oferecer a melhor experiência possível no atendimento ao cliente.
              </p>
              <blockquote className="border-l-4 border-nzd-secondary pl-4 italic text-gray-500 mb-10">
                “A função moderna e verdadeira do profissional da contabilidade é, pois, a de um consultor sobre assuntos da riqueza das empresas.”<br/>
                <span className="font-bold text-nzd-primary mt-2 inline-block">— Antônio Lopes de Sá</span>
              </blockquote>
              <Link href="/quem-somos" className="inline-flex items-center text-nzd-secondary font-bold hover:text-nzd-primary transition-colors text-lg group">
                Conheça a trajetória de nosso Diretor
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Espaço reservado para uma foto real do escritório/equipe */}
            <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-tr from-nzd-primary/10 to-nzd-secondary/10"></div>
              <Users className="h-20 w-20 text-nzd-primary/30 mb-4 relative z-10" />
              <p className="text-sm text-gray-500 font-medium relative z-10">Foto de Rodrigo Miranda ou Equipe NZD</p>
            </div>
          </div>
        </section>

        {/* 4. Soluções / Serviços */}
        <section id="solucoes" className="w-full py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-200/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-nzd-primary mb-6">Nossas Soluções</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Atendemos desde MEI, micro e pequenas empresas até grandes corporações, igrejas, clubes e instituições sem fins lucrativos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicos.length > 0 ? (
                servicos.map((servico) => (
                  <div key={servico.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-nzd-secondary/30 transition-all group flex flex-col">
                    <div className="w-16 h-16 bg-nzd-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nzd-secondary/10 transition-colors">
                      {renderIcon(servico.icone)}
                    </div>
                    <h3 className="text-xl font-bold text-nzd-primary mb-3">{servico.titulo}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{servico.descricao}</p>
                  </div>
                ))
              ) : (
                <div className="col-span-4 text-center py-10 text-gray-500">Nenhum serviço cadastrado.</div>
              )}
            </div>
          </div>
        </section>

        {/* 5. Notícias / Blog Preview Section */}
        <section id="conteudos" className="w-full py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-nzd-primary mb-4">Fique por dentro</h2>
                <p className="text-gray-600 text-lg">Mantenha-se informado com as últimas novidades da Receita Federal e do mercado empresarial.</p>
              </div>
              <Link href="/blog" className="text-nzd-secondary font-bold hover:text-nzd-primary transition-colors flex items-center gap-2 whitespace-nowrap">
                Ver todas as notícias <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ultimasNoticias.length > 0 ? (
                ultimasNoticias.map((noticia) => (
                  <div key={noticia.id} className="border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-nzd-secondary/20 transition-all bg-white flex flex-col h-full group">
                    <div className="text-xs font-bold text-nzd-secondary mb-3 uppercase tracking-wider bg-nzd-secondary/10 inline-block px-3 py-1 rounded-full self-start">
                      {noticia.fonte}
                    </div>
                    <h3 className="text-xl font-bold text-nzd-primary mb-3 group-hover:text-nzd-secondary transition-colors line-clamp-2">
                      {noticia.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-1">
                      {noticia.resumo}
                    </p>
                    <a href={noticia.url_origem || "#"} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-nzd-primary group-hover:text-nzd-secondary transition-colors flex items-center gap-1">
                      Ler artigo na fonte <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                  <p className="text-gray-500 font-medium">As notícias estão sendo atualizadas pelo nosso sistema. Volte em breve!</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 6. Footer (Rodapé) */}
      <footer id="contato" className="bg-nzd-primary text-white pt-20 pb-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="NZD Contabilidade" width={160} height={55} className="h-auto w-auto max-h-14 brightness-0 invert" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Contabilidade consultiva focada em resultados, segurança e crescimento para o seu negócio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nzd-secondary transition-colors text-xs font-bold uppercase tracking-wider">
                IG
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nzd-secondary transition-colors text-xs font-bold uppercase tracking-wider">
                IN
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Navegação</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><Link href="/" className="hover:text-nzd-secondary transition-colors">Início</Link></li>
              <li><Link href="#quem-somos" className="hover:text-nzd-secondary transition-colors">Quem Somos</Link></li>
              <li><Link href="#solucoes" className="hover:text-nzd-secondary transition-colors">Nossas Soluções</Link></li>
              <li><Link href="#conteudos" className="hover:text-nzd-secondary transition-colors">Conteúdos e Notícias</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Serviços</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-nzd-secondary transition-colors">Gestão Contábil</a></li>
              <li><a href="#" className="hover:text-nzd-secondary transition-colors">Assessoria Fiscal</a></li>
              <li><a href="#" className="hover:text-nzd-secondary transition-colors">Departamento Pessoal</a></li>
              <li><a href="#" className="hover:text-nzd-secondary transition-colors">Legalização de Empresas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contato</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-nzd-secondary shrink-0" />
                <span>Rua Exemplo de Endereço, 123<br/>Bairro - Cidade/UF</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-nzd-secondary shrink-0" />
                <span>(00) 0000-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-nzd-secondary shrink-0" />
                <span>contato@nzdcontabilidade.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} NZD Contabilidade. Todos os direitos reservados.</p>
          <p>Desenvolvido com tecnologia de ponta e foco em performance.</p>
        </div>
      </footer>
    </div>
  );
}