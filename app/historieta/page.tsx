import Link from "next/link";
import Image from "next/image";
import { chaptersData } from "@/data";
import { siteConfig } from "@/config";
import Separador from "@/components/ui/separador";

export default function HistorietaLayout() {
  const theme = siteConfig.theme;

  return (
    <main className="min-h-screen pt-24 pb-20 bg-black selection:bg-[#990000] selection:text-white">
      <div className="container mx-auto px-4">
        
        <header className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em] text-[#A67C00] drop-shadow-lg mb-4"
            style={{ fontFamily: siteConfig.typography.fontHeading }}
          >
            Capítulos
          </h1>
          <Separador className="mx-auto" />
          <p className="mt-6 text-[#D1D5DB] text-lg max-w-2xl mx-auto" style={{ fontFamily: siteConfig.typography.fontBody }}>
            Sumérgete en el universo de Operation Gothic Serpent. Selecciona un volumen para comenzar la lectura.
          </p>
        </header>

        {/* Grilla de Volúmenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {chaptersData.map((chapter) => (
            <Link 
              key={chapter.id} 
              href={`/historieta/capitulo/${chapter.id}`}
              className="group block relative"
            >
              {/* Contenedor de la Portada */}
              <div className="relative aspect-[2/3] w-full overflow-hidden border border-[#333333] group-hover:border-[#990000] bg-[#0A0A0A] shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2">
                <Image
                  src={chapter.coverImage}
                  alt={chapter.title.es}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-700"
                />
                
                {/* Viñeta de Leer */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end text-left h-1/2">
                   <span className="text-xs uppercase tracking-widest text-[#990000] font-bold mb-1">Volumen #{chapter.id}</span>
                   <h2 className="text-2xl text-white font-bold uppercase tracking-wider leading-tight" style={{ fontFamily: siteConfig.typography.fontAlt }}>
                      {chapter.title.es}
                   </h2>
                </div>
              </div>

              {/* Descripción fuera de la carta */}
              <p className="mt-4 text-[#9CA3AF] text-sm leading-relaxed" style={{ fontFamily: siteConfig.typography.fontBody }}>
                {chapter.description.es}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
