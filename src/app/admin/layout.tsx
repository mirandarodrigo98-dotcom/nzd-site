import Link from "next/link";
import { LayoutDashboard, Newspaper, Settings, Briefcase, LogOut } from "lucide-react";

export const metadata = {
  title: "Painel Administrativo | NZD",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Menu Lateral (Sidebar) */}
      <aside className="w-64 bg-nzd-primary text-white flex flex-col shadow-xl hidden md:flex">
        <div className="p-6 border-b border-white/10">
          <div className="text-2xl font-bold">
            NZD<span className="text-nzd-secondary">.</span> Admin
          </div>
          <p className="text-gray-400 text-xs mt-1">Gestão de Conteúdo</p>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white font-medium transition-colors">
            <LayoutDashboard className="w-5 h-5 text-nzd-secondary" />
            Dashboard
          </Link>
          <Link href="/admin/servicos" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
            <Briefcase className="w-5 h-5" />
            Serviços
          </Link>
          <Link href="/admin/noticias" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
            <Newspaper className="w-5 h-5" />
            Notícias (Robô)
          </Link>
          <Link href="/admin/configuracoes" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 text-gray-300 hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            Configurações
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-red-500/20 text-gray-300 hover:text-red-400 transition-colors">
            <LogOut className="w-5 h-5" />
            Sair
          </button>
        </div>
      </aside>

      {/* Área Principal */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        <header className="bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center md:hidden">
          <div className="text-xl font-bold text-nzd-primary">NZD.</div>
          <button className="p-2 bg-gray-100 rounded-md">Menu</button>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}