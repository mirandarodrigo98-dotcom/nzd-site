import Link from "next/link";
import { ArrowRight, BarChart3, Building2, Calculator, Users, MapPin, Phone, Mail, Instagram, Linkedin } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  // Puxa as 3 últimas notícias do banco de dados (que o robô preencheu)
  const ultimasNoticias = await prisma.noticia.findMany({
    orderBy: { data_publicacao: 'desc' },
    take: 3
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Header (Cabeçalho) */}
      <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
        <div className="text-2xl font-bold text-nzd-primary flex items-center gap-2">
          NZD<span className="text-nzd-secondary">.</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-nzd-secondary transition-colors">Início</Link>
          <Link href="#quem-somos" className="hover:text-nzd-secondary transition-colors">Quem Somos</Link>
          <Link href="#solucoes" className="hover:text-nzd-secondary transition-colors">Soluções</Link>
          <Link href="#conteudos" className="hover:text-nzd-secondary transition-colors">Conteúdos</Link>
          <Link href="#contato" className="hover:text-nzd-secondary transition-colors">Contato</Link>
        </nav>
        <button className="bg-nzd-primary hover:bg-nzd-primary/90 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm hover:shadow">
          Área do Cliente
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
          <div className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Link href="#contato" className="bg-nzd-secondary hover:bg-nzd-secondary/90 text-white px-8 py-3.5 rounded-md text-base font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              Fale com um Especialista <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#solucoes" className="bg-white hover:bg-gray-50 text-nzd-primary border border-gray-200 px-8 py-3.5 rounded-md text-base font-bold transition-all shadow-sm">
              Nossas Soluções
            </Link>
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
                A NZD Contabilidade nasceu com o propósito de transformar a visão tradicional da contabilidade. Não somos apenas geradores de guias e obrigações, somos o seu braço direito estratégico.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Contamos com uma equipe altamente experiente e em constante capacitação, preparada para atender às suas demandas com agilidade e precisão.
              </p>
              <Link href="/quem-somos" className="inline-flex items-center text-nzd-secondary font-bold hover:text-nzd-primary transition-colors text-lg group">
                Conheça nossa história completa 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Espaço reservado para uma foto real do escritório/equipe */}
            <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex flex-col items-center justify-center relative overflow-hidden shadow-inner">
              <div className="absolute inset-0 bg-gradient-to-tr from-nzd-primary/10 to-nzd-secondary/10"></div>
              <Users className="h-20 w-20 text-nzd-primary/30 mb-4 relative z-10" />
              <p className="text-sm text-gray-500 font-medium relative z-10">Espaço para foto da equipe</p>
            </div>
          </div>
        </section>

        {/* 4. Soluções / Serviços */}
        <section id="solucoes" className="w-full py-24 px-6 md:px-12 bg-gray-50 border-y border-gray-200/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-nzd-primary mb-6">Nossas Soluções</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Oferecemos um portfólio completo e personalizado para garantir a conformidade e impulsionar o sucesso financeiro da sua empresa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Gestão Contábil", desc: "Análise profunda do seu patrimônio para decisões mais assertivas.", icon: <BarChart3 className="w-8 h-8 text-nzd-secondary" /> },
                { title: "Assessoria Fiscal", desc: "Planejamento tributário inteligente para reduzir custos legais.", icon: <Calculator className="w-8 h-8 text-nzd-secondary" /> },
                { title: "Departamento Pessoal", desc: "Gestão completa da sua folha de pagamento e obrigações trabalhistas.", icon: <Users className="w-8 h-8 text-nzd-secondary" /> },
                { title: "Legalização", desc: "Abertura, alteração e encerramento de empresas sem burocracia.", icon: <Building2 className="w-8 h-8 text-nzd-secondary" /> },
              ].map((servico, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-nzd-secondary/30 transition-all group">
                  <div className="w-16 h-16 bg-nzd-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-nzd-secondary/10 transition-colors">
                    {servico.icon}
                  </div>
                  <h3 className="text-xl font-bold text-nzd-primary mb-3">{servico.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{servico.desc}</p>
                </div>
              ))}
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
            <div className="text-3xl font-bold text-white mb-6">
              NZD<span className="text-nzd-secondary">.</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Contabilidade consultiva focada em resultados, segurança e crescimento para o seu negócio.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nzd-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nzd-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
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