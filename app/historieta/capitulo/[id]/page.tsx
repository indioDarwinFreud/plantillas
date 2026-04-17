"use client"

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { chaptersData } from "@/data";
import { siteConfig } from "@/config";

export default function LectorComic({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  // Unwrap params with use() for Next.js 15+
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const chapterId = parseInt(id, 10);
  const chapter = chaptersData.find(c => c.id === chapterId);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  // Escuchar teclado para avanzar rápido
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'd') {
        siguientePagina();
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        paginaAnterior();
      } else if (e.key === 'Escape') {
        router.push('/historieta');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPageIndex]);

  if (!chapter) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-[#990000] font-bold uppercase tracking-widest text-2xl font-cinzel">
        Capítulo no encontrado.
        <Link href="/historieta" className="ml-4 underline text-white">Volver al Índice</Link>
      </div>
    );
  }

  const pages = chapter.pages[language];
  const isFirstPage = currentPageIndex === 0;
  const isLastPage = currentPageIndex === pages.length - 1;

  const siguientePagina = () => {
    if (!isLastPage) setCurrentPageIndex(prev => prev + 1);
  };

  const paginaAnterior = () => {
    if (!isFirstPage) setCurrentPageIndex(prev => prev - 1);
  };

  return (
    <main className="fixed inset-0 z-50 bg-[#000000] overflow-hidden flex flex-col selection:bg-[#990000] selection:text-white">
      {/* Controles Superiores (Volver) */}
      <div className="absolute top-0 inset-x-0 z-20 h-20 flex items-center justify-between px-6 bg-gradient-to-b from-black/90 to-transparent">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => router.push('/historieta')}
            className="text-[#D1D5DB] hover:text-white flex items-center gap-2 transition-colors uppercase tracking-widest text-sm"
            style={{ fontFamily: siteConfig.typography.fontAlt }}
          >
            <X size={24} /> <span>Cerrar</span>
          </button>

          {/* Selector de Idioma */}
          <div className="flex items-center bg-[#111111] border border-[#333333] p-1">
             <button 
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 text-xs font-bold transition-all ${language === 'es' ? 'bg-[#990000] text-white' : 'text-[#666] hover:text-[#999]'}`}
             >
               ES
             </button>
             <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-xs font-bold transition-all ${language === 'en' ? 'bg-[#990000] text-white' : 'text-[#666] hover:text-[#999]'}`}
             >
               EN
             </button>
          </div>
        </div>
        
        <div className="flex flex-col items-end">
           <div className="text-[#A67C00] uppercase tracking-[0.2em] text-xs font-black hidden sm:block mb-1">
             {chapter.title[language]}
           </div>
           <div className="text-[#666] uppercase tracking-widest text-[10px] font-bold">
             Vol {chapter.id} - Pág {currentPageIndex + 1}/{pages.length}
           </div>
        </div>
      </div>

      {/* Visor de la Página */}
      <div className="relative flex-1 w-full h-full flex items-center justify-center select-none">
        
        {/* Imagen actual */}
        <div className="relative w-full h-full max-w-[1200px] max-h-screen">
            <Image
                key={currentPageIndex} // Force re-render for crisp swap (dry page turn)
                src={pages[currentPageIndex]}
                alt={`Página ${currentPageIndex + 1}`}
                fill
                className="object-contain animate-in fade-in zoom-in-95 duration-200"
                priority
                quality={100}
            />
        </div>

        {/* Zonas de Clic (Atrás y Siguiente) - Ocupan toda la pantalla dividida */}
        <div 
          onClick={paginaAnterior}
          className={`absolute inset-y-0 left-0 w-1/4 cursor-w-resize z-10 hidden sm:block ${isFirstPage ? 'cursor-not-allowed hidden' : ''}`}
        />
        <div 
          onClick={siguientePagina}
          className={`absolute inset-y-0 right-0 w-1/4 cursor-e-resize z-10 hidden sm:block ${isLastPage ? 'cursor-not-allowed hidden' : ''}`}
        />
      </div>

      {/* Flechas Navigacionales Físicas Visibles */}
      {!isFirstPage && (
        <button 
          onClick={paginaAnterior}
          className="absolute left-4 sm:left-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/50 text-[#990000] border border-[#333333] hover:border-[#990000] hover:bg-black transition-all rounded-none hidden sm:flex"
        >
          <ChevronLeft size={40} strokeWidth={1.5} />
        </button>
      )}

      {!isLastPage && (
        <button 
          onClick={siguientePagina}
          className="absolute right-4 sm:right-12 top-1/2 -translate-y-1/2 z-20 p-4 bg-black/50 text-[#990000] border border-[#333333] hover:border-[#990000] hover:bg-black transition-all rounded-none hidden sm:flex"
        >
          <ChevronRight size={40} strokeWidth={1.5} />
        </button>
      )}

      {/* Controles Inferiores (Móvil y Teclado Hint) */}
      <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center px-4">
        {/* Barra de progreso visual */}
        <div className="w-64 h-1 bg-[#1A1A1A]">
            <div 
                className="h-full bg-[#990000] transition-all duration-300"
                style={{ width: `${((currentPageIndex + 1) / pages.length) * 100}%` }}
            />
        </div>
      </div>

      {/* Navegación móvil manual */}
      <div className="absolute bottom-16 inset-x-0 z-30 flex justify-center gap-4 sm:hidden">
          <button onClick={paginaAnterior} disabled={isFirstPage} className="p-4 bg-[#111] text-[#990000] border border-[#333] disabled:opacity-30">
             <ChevronLeft size={32} />
          </button>
          <button onClick={siguientePagina} disabled={isLastPage} className="p-4 bg-[#111] text-[#990000] border border-[#333] disabled:opacity-30">
             <ChevronRight size={32} />
          </button>
      </div>

    </main>
  );
}
