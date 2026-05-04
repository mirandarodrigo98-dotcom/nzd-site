export const dynamic = 'force-dynamic';

import { prisma } from "@/lib/prisma";
import { Users, Newspaper, Briefcase, RefreshCw } from "lucide-react";

export default async function AdminDashboard() {
  // Busca estatísticas reais do banco de dados
  const totalNoticias = await prisma.noticia.count();
  const totalServicos = await prisma.servico.count();
  const totalUsuarios = await prisma.usuario.count();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Visão Geral</h1>
        <p className="text-gray-600 mt-1">Bem-vindo ao painel de controle do seu site.</p>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Newspaper className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Notícias Publicadas</p>
            <h3 className="text-2xl font-bold text-gray-900">{totalNoticias}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-nzd-secondary/10 rounded-lg flex items-center justify-center text-nzd-secondary">
            <Briefcase className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Serviços Cadastrados</p>
            <h3 className="text-2xl font-bold text-gray-900">{totalServicos}</h3>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-14 h-14 bg-nzd-primary/10 rounded-lg flex items-center justify-center text-nzd-primary">
            <Users className="w-7 h-7" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Usuários Admin</p>
            <h3 className="text-2xl font-bold text-gray-900">{totalUsuarios}</h3>
          </div>
        </div>
      </div>

      {/* Ações Rápidas */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Ações Rápidas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-nzd-primary hover:bg-gray-50 transition-all text-left">
            <RefreshCw className="w-6 h-6 text-nzd-primary" />
            <div>
              <h4 className="font-bold text-gray-900">Forçar Sincronização do Robô</h4>
              <p className="text-xs text-gray-500">Busca novas notícias na Receita e Contábeis agora mesmo.</p>
            </div>
          </button>
          
          <button className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-nzd-secondary hover:bg-gray-50 transition-all text-left">
            <Briefcase className="w-6 h-6 text-nzd-secondary" />
            <div>
              <h4 className="font-bold text-gray-900">Adicionar Novo Serviço</h4>
              <p className="text-xs text-gray-500">Cadastre um novo serviço para aparecer na página inicial.</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}