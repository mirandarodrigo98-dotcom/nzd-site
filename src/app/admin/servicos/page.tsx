export const dynamic = 'force-dynamic';

import { prisma } from "@/lib/prisma";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";

export default async function AdminServicos() {
  const servicos = await prisma.servico.findMany({
    orderBy: { ordem: 'asc' }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestão de Serviços</h1>
          <p className="text-gray-600 mt-1">Gerencie as soluções exibidas na página inicial.</p>
        </div>
        <button className="bg-nzd-primary hover:bg-nzd-primary/90 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm flex items-center gap-2">
          <PlusCircle className="w-5 h-5" />
          Novo Serviço
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200 text-gray-600 text-sm">
              <th className="py-4 px-6 font-semibold">Serviço</th>
              <th className="py-4 px-6 font-semibold">Descrição</th>
              <th className="py-4 px-6 font-semibold text-center">Status</th>
              <th className="py-4 px-6 font-semibold text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {servicos.length > 0 ? (
              servicos.map((servico) => (
                <tr key={servico.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6 font-medium text-gray-900">{servico.titulo}</td>
                  <td className="py-4 px-6 text-gray-500 text-sm truncate max-w-xs">{servico.descricao}</td>
                  <td className="py-4 px-6 text-center">
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${servico.ativo ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {servico.ativo ? 'Ativo' : 'Inativo'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Editar">
                        <Pencil className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Excluir">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="py-8 text-center text-gray-500">
                  Nenhum serviço cadastrado ainda.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}