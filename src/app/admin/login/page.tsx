"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginAdmin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);
    setErro("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (res.ok) {
        // Redireciona para o painel em caso de sucesso
        router.push("/admin");
      } else {
        const data = await res.json();
        setErro(data.erro || "E-mail ou senha incorretos.");
      }
    } catch (err) {
      setErro("Erro de conexão. Tente novamente.");
    } finally {
      setCarregando(false);
    }
  };

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

        {erro && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 text-sm rounded-md font-medium text-center">
            {erro}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-nzd-primary mb-2">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:ring-2 focus:ring-nzd-secondary/50 focus:border-nzd-secondary outline-none transition-all text-gray-800"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-nzd-primary hover:bg-nzd-primary/90 text-white font-bold py-3.5 rounded-md transition-colors shadow-sm disabled:opacity-50"
          >
            {carregando ? "Autenticando..." : "Entrar no Painel"}
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