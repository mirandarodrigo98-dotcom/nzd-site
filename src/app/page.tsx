export const dynamic = 'force-dynamic';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, Building2, Calculator, Users, Phone, Mail, Banknote, RefreshCcw, Stethoscope, Scale, CheckCircle2 } from "lucide-react";
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

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";

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
    <div className="flex flex-col flex-1">
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section (Vitrine Principal em Carrossel) */}
        <HeroCarousel />

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

        {/* 5. Notícias (Fique por Dentro) */}
        <section id="conteudos" className="w-full py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-nzd-primary mb-4">Fique por dentro</h2>
                <p className="text-gray-600 text-lg max-w-2xl">
                  Mantenha-se informado com as últimas novidades da Receita Federal e do mercado empresarial.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ultimasNoticias.length > 0 ? (
                ultimasNoticias.map((noticia) => (
                  <div key={noticia.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-nzd-primary/20 transition-all flex flex-col overflow-hidden group">
                    <div className="p-8 flex flex-col flex-1">
                      <div className="mb-6">
                        <span className="inline-block px-3 py-1 bg-nzd-secondary/10 text-nzd-secondary font-bold text-xs rounded-full uppercase tracking-wider">
                          {noticia.fonte}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-nzd-primary transition-colors line-clamp-3">
                        {noticia.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-1 line-clamp-4">
                        {noticia.resumo}
                      </p>
                      <Link href={`/noticias/${noticia.slug}`} className="inline-flex items-center text-nzd-primary font-bold hover:text-nzd-secondary transition-colors group/link mt-auto">
                        Ler artigo completo <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-3 text-center py-10 text-gray-500">Nenhuma notícia publicada ainda.</div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}