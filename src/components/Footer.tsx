import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-nzd-primary text-white pt-20 pb-10 px-6 md:px-12 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <Image src="/logo.png" alt="NZD Contabilidade" width={160} height={55} className="h-auto w-auto max-h-14 brightness-0 invert" />
          </Link>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Contabilidade consultiva focada em resultados, segurança e crescimento para o seu negócio.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/nzdcontabilidade/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nzd-secondary transition-colors" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/nzdcontabilidade/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nzd-secondary transition-colors" title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.youtube.com/@nzdcontabilidade" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-nzd-secondary transition-colors" title="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M2.5 7.1C2.5 7.1 2.3 5.4 3 4.6C3.9 3.7 5 3.7 5.5 3.6C8.8 3.4 12 3.4 12 3.4C12 3.4 15.2 3.4 18.5 3.6C19 3.7 20.1 3.7 21 4.6C21.7 5.4 21.5 7.1 21.5 7.1C21.5 7.1 21.7 8.8 21.7 10.5V13.5C21.7 15.2 21.5 16.9 21.5 16.9C21.5 16.9 21.7 18.6 21 19.4C20.1 20.3 18.8 20.3 18.3 20.4C15.4 20.7 12 20.7 12 20.7C12 20.7 8.8 20.6 5.5 20.4C5 20.3 3.9 20.3 3 19.4C2.3 18.6 2.5 16.9 2.5 16.9C2.5 16.9 2.3 15.2 2.3 13.5V10.5C2.3 8.8 2.5 7.1 2.5 7.1Z"/><path d="M10 15L15.5 12L10 9V15Z"/></svg>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Navegação</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link href="/" className="hover:text-nzd-secondary transition-colors">Início</Link></li>
            <li><Link href="/#quem-somos" className="hover:text-nzd-secondary transition-colors">Quem Somos</Link></li>
            <li><Link href="/#solucoes" className="hover:text-nzd-secondary transition-colors">Nossas Soluções</Link></li>
            <li><Link href="/#conteudos" className="hover:text-nzd-secondary transition-colors">Conteúdos e Notícias</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Serviços</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><Link href="/#solucoes" className="hover:text-nzd-secondary transition-colors">Gestão Contábil</Link></li>
            <li><Link href="/#solucoes" className="hover:text-nzd-secondary transition-colors">Assessoria Fiscal</Link></li>
            <li><Link href="/#solucoes" className="hover:text-nzd-secondary transition-colors">Departamento Pessoal</Link></li>
            <li><Link href="/#solucoes" className="hover:text-nzd-secondary transition-colors">Legalização de Empresas</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Contato</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-nzd-secondary shrink-0" />
              <span>Rua Soldado Francisco Alves Rocha, Nº 123<br/>Santo Agostinho - Volta Redonda/RJ<br/>CEP 27211-160</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-nzd-secondary shrink-0" />
              <span>(24) 3026-5648 | (24) 3337-4865</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-green-500 shrink-0" />
              <span>WhatsApp: (24) 3026-5648</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-nzd-secondary shrink-0" />
              <span>contato@nzdcontabilidade.com.br</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-10 overflow-hidden rounded-xl shadow-lg border border-white/10">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.3317056024996!2d-44.08581782500057!3d-22.565355125712173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9ea2d9f78326c5%3A0xc3c9735d1db0e071!2sR.%20Soldado%20Francisco%20Alves%20Rocha%2C%20123%20-%20Santo%20Agostinho%2C%20Volta%20Redonda%20-%20RJ%2C%2027211-160!5e0!3m2!1spt-BR!2sbr!4v1714400000000!5m2!1spt-BR!2sbr" 
          width="100%" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa de Localização NZD Contabilidade"
        ></iframe>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} NZD Contabilidade. Todos os direitos reservados.</p>
        <p>Desenvolvido com tecnologia de ponta e foco em performance.</p>
      </div>
    </footer>
  );
}