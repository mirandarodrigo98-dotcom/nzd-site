import { prisma } from "@/lib/prisma";
import { ExternalLink, RefreshCw } from "lucide-react";

export default async function AdminNoticias() {
  const noticias = await prisma.noticia.findMany({
    orderBy: { data_publicacao: 'desc' },
    take: 20
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Últimas Notícias (Robô)</h1>
          <p className="text-gray-600 mt-1">Veja as notícias que o sistema capturou automaticamente.</p>
        </div>
        <button className="bg-nzd-secondary hover:bg-nzd-secondary/90 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm flex items-center gap-2">
          <RefreshCw className="w-5 h-5" />
          Sincronizar Agora
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {noticias.length > 0 ? (
          noticias.map((noticia) => (
            <div key={noticia.id} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-nzd-primary bg-nzd-primary/10 px-2 py-1 rounded-md uppercase">
                    {noticia.fonte}
                  </span>
                  <span className="text-sm text-gray-500">
                    {new Date(noticia.data_publicacao).toLocaleDateString('pt-BR')}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{noticia.titulo}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{noticia.resumo}</p>
              </div>
              <a 
                href={noticia.url_origem || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 flex items-center gap-2 text-blue-600 font-medium hover:underline bg-blue-50 px-4 py-2 rounded-lg"
              >
                Ler na Fonte <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500">Nenhuma notícia sincronizada ainda.</p>
          </div>
        )}
      </div>
    </div>
  );
}