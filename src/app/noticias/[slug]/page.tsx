import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

export default async function NoticiaInterna({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const noticia = await prisma.noticia.findUnique({
    where: { slug }
  });

  if (!noticia) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header Simplificado */}
      <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="NZD Contabilidade" width={140} height={48} className="h-auto w-auto max-h-12" priority />
        </Link>
        <Link href="/" className="text-gray-500 hover:text-nzd-primary font-medium flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar ao site
        </Link>
      </header>

      <main className="flex-1 py-12 px-6">
        <article className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="inline-block px-3 py-1 bg-nzd-secondary/10 text-nzd-secondary font-bold text-xs rounded-full uppercase tracking-wider">
                {noticia.fonte}
              </span>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <Calendar className="w-4 h-4" />
                {new Date(noticia.data_publicacao).toLocaleDateString('pt-BR')}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-nzd-primary mb-6 leading-tight">
              {noticia.titulo}
            </h1>
            
            {noticia.resumo && (
              <p className="text-xl text-gray-500 mb-10 leading-relaxed font-medium">
                {noticia.resumo}
              </p>
            )}

            <div className="prose prose-lg max-w-none text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-headings:text-nzd-primary"
                 dangerouslySetInnerHTML={{ __html: noticia.conteudo }} 
            />

            <div className="mt-16 pt-8 border-t border-gray-100">
              <p className="text-gray-500 mb-4 text-sm font-medium uppercase tracking-wider">Fonte original da notícia:</p>
              <a 
                href={noticia.url_origem || "#"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors gap-2"
              >
                Acessar {noticia.fonte} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* Footer Simplificado */}
      <footer className="bg-nzd-primary text-white py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} NZD Contabilidade. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}