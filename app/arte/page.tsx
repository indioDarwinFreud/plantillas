import Image from "next/image";
import { artData } from "@/data";
import { siteConfig } from "@/config";
import Separador from "@/components/ui/separador";

export default function ArteLayout() {
  const theme = siteConfig.theme;

  return (
    <main className="min-h-screen pt-24 pb-20 bg-black selection:bg-[#990000] selection:text-white">
      <div className="container mx-auto px-4">
        
        <header className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em] text-[#FFFFFF] drop-shadow-lg mb-4"
            style={{ fontFamily: siteConfig.typography.fontHeading }}
          >
            Galería de <span className="text-[#990000]">Arte</span>
          </h1>
          <Separador className="mx-auto" />
          <p className="mt-6 text-[#9CA3AF] text-lg max-w-2xl mx-auto" style={{ fontFamily: siteConfig.typography.fontBody }}>
            Plasmando el horror a tinta pura. Diseños originales, concepts e ilustraciones exclusivas.
          </p>
        </header>

        {/* Grilla Masonry o Cajas de Alto Contraste */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 max-w-7xl mx-auto">
          {artData.map((obra) => (
            <div 
              key={obra.id} 
              className="group relative break-inside-avoid overflow-hidden border border-[#222222] hover:border-[#A67C00] bg-[#050505] transition-all duration-500"
            >
              {/* Imagen principal (Toma la altura natural) */}
              <div className="w-full relative">
                <Image
                  src={obra.image}
                  alt={obra.title}
                  width={800}
                  height={1200}
                  className="object-cover w-full h-auto grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100 transition-all duration-700"
                />
              </div>

              {/* Overlay de información (Visible en hover) */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 border-b-4 border-b-[#990000]">
                 <h2 className="text-xl md:text-2xl text-white font-bold uppercase tracking-wider mb-2" style={{ fontFamily: siteConfig.typography.fontAlt }}>
                    {obra.title}
                 </h2>
                 <p className="text-[#A67C00] text-sm leading-relaxed" style={{ fontFamily: siteConfig.typography.fontBody }}>
                    {obra.description}
                 </p>
                 <button className="mt-4 px-4 py-2 bg-transparent border border-white/50 text-white uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black transition-colors w-fit">
                    Ver Detalles
                 </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
