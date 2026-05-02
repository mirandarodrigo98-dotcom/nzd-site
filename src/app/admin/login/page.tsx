import Link from "next/link";

export const metadata = {
  title: "Login - Painel Administrativo | NZD",
};

export default function LoginAdmin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-nzd-primary mb-2">
            NZD<span className="text-nzd-secondary">.</span> Admin
          </div>
          <p className="text-gray-500 text-sm">
            Acesse o painel para gerenciar o conteúdo do site.
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-nzd-primary mb-2">
              E-mail
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-nzd-secondary/50 focus:border-nzd-secondary outline-none transition-all text-gray-800"
              placeholder="seu@email.com.br"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-nzd-primary mb-2">
              Senha
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-nzd-secondary/50 focus:border-nzd-secondary outline-none transition-all text-gray-800"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="rounded text-nzd-primary focus:ring-nzd-primary" />
              Lembrar-me
            </label>
            <a href="#" className="text-nzd-secondary font-medium hover:text-nzd-primary transition-colors">
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-nzd-primary hover:bg-nzd-primary/90 text-white font-bold py-3.5 rounded-md transition-colors shadow-sm"
          >
            Entrar no Painel
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          <Link href="/" className="hover:text-nzd-primary transition-colors flex items-center justify-center gap-2">
            &larr; Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  );
}