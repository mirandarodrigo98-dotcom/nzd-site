import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
      <Link href="/" className="flex items-center">
        <Image src="/logo.png" alt="NZD Contabilidade" width={140} height={48} className="h-auto w-auto max-h-12" priority />
      </Link>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-nzd-secondary transition-colors">Início</Link>
        <Link href="/#quem-somos" className="hover:text-nzd-secondary transition-colors">Quem Somos</Link>
        <Link href="/#solucoes" className="hover:text-nzd-secondary transition-colors">Soluções</Link>
        <Link href="/#conteudos" className="hover:text-nzd-secondary transition-colors">Conteúdos</Link>
        <Link href="/#contato" className="hover:text-nzd-secondary transition-colors">Contato</Link>
      </nav>
      <button className="bg-nzd-primary hover:bg-nzd-primary/90 text-white px-5 py-2.5 rounded-md text-sm font-semibold transition-all shadow-sm hover:shadow">
        <a href="https://nzdcontabilidade.app.questorpublico.com.br/" target="_blank" rel="noopener noreferrer">Área do Cliente</a>
      </button>
    </header>
  );
}