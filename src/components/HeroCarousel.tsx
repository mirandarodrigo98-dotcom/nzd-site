"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Contabilidade consultiva para impulsionar o seu negócio",
    subtitle: "Somos a extensão da sua empresa. Transformamos dados contábeis em estratégias claras e seguras para o seu crescimento contínuo.",
    image: null,
    showContent: true,
  },
  {
    id: 2,
    title: "",
    subtitle: "",
    image: "/banner_reforma.webp",
    showContent: false, // Esconde os textos e botões, mostrando apenas a imagem
  }
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Gira a cada 6 segundos
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gray-50 group">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Fundo do Slide */}
          {slide.image ? (
            <Link href="#contato" className="absolute inset-0 block">
              <Image
                src={slide.image}
                alt={slide.title || "Banner"}
                fill
                className="object-cover object-center"
                priority={index === 0}
              />
              {/* Overlay removido para deixar a imagem limpa e brilhante */}
            </Link>
          ) : (
            <div className="absolute inset-0 bg-gray-50">
              <div className="absolute top-0 left-0 w-full h-full bg-nzd-primary/5"></div>
            </div>
          )}

          {/* Conteúdo (Textos e Botões) - Só aparece se showContent for true */}
          {slide.showContent && (
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-6xl mx-auto pointer-events-none">
              <h1 className={`text-4xl md:text-6xl font-extrabold max-w-4xl tracking-tight mb-6 transition-all duration-700 delay-300 pointer-events-auto ${
                index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${slide.image ? 'text-white' : 'text-nzd-primary'}`}>
                {slide.title}
              </h1>
              
              <p className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed transition-all duration-700 delay-500 pointer-events-auto ${
                index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              } ${slide.image ? 'text-gray-200' : 'text-gray-600'}`}>
                {slide.subtitle}
              </p>
              
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 pointer-events-auto ${
                index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}>
                <Link href="#contato" className="bg-nzd-secondary hover:bg-nzd-secondary/90 text-white px-8 py-3.5 rounded-md text-base font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  Fale com um Especialista <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="https://nzdcontabilidade.app.questorpublico.com.br/" target="_blank" rel="noopener noreferrer" className={`px-8 py-3.5 rounded-md text-base font-bold transition-all shadow-sm border flex items-center justify-center ${
                  slide.image 
                    ? 'bg-white/10 hover:bg-white/20 text-white border-white/30' 
                    : 'bg-white hover:bg-gray-50 text-nzd-primary border-gray-200'
                }`}>
                  Área do Cliente
                </a>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Setas de Controle */}
      <button 
        onClick={prevSlide} 
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 text-white hover:bg-nzd-primary hover:text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Anterior"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 text-white hover:bg-nzd-primary hover:text-white transition-all opacity-0 group-hover:opacity-100"
        aria-label="Próximo"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Ir para o slide ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current 
                ? "bg-nzd-secondary w-8" 
                : "bg-gray-400/50 hover:bg-gray-400 w-2.5"
            }`}
          />
        ))}
      </div>
    </section>
  );
}