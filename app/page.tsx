"use client"

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config";
import Separador from "@/components/ui/separador";

export default function Home() {
  const theme = siteConfig.theme;

  return (
    <main className="min-h-screen relative flex flex-col pt-16 md:pt-24 bg-transparent selection:bg-[#990000] selection:text-white">
      {/* 1. Hero Section (Póster Mogadishu) */}
      <section className="relative w-full h-[80vh] sm:h-screen flex flex-col justify-center items-center overflow-hidden border-b border-[#333333]">
        {/* Fondo Imagen Oscurecida */}
        <div className="absolute inset-0 z-0 bg-black">
          <Image 
            src="/WhatsApp Image 2026-03-27 at 20.39.49.jpeg" // Póster Mogadishu
            alt="Operation Gothic Serpent Cover"
            fill
            className="object-cover opacity-40 hover:opacity-50 transition-opacity duration-1000 grayscale hover:grayscale-0"
            priority
          />
          {/* Degradado encima de la imagen para integrar con el fondo negro */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        {/* Contenido Hero */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
          <h1 
            className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-widest text-[#FFFFFF] drop-shadow-2xl mb-4"
            style={{ fontFamily: siteConfig.typography.fontHeading, textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}
          >
            Operation
            <br />
            <span style={{ color: theme.textColors.secondaryLight }} className="text-6xl sm:text-8xl md:text-9xl tracking-[0.2em] relative inline-block mt-2">
              Gothic Serpent
            </span>
          </h1>
          
          <p 
            className="text-lg sm:text-xl md:text-2xl text-[#D1D5DB] max-w-2xl font-light tracking-wide mt-6 border-l-4 border-[#990000] pl-4 text-left"
            style={{ fontFamily: siteConfig.typography.fontBody }}
          >
            "El cielo se oscureció sobre Mogadishu. La sangre tiñó la arena."
          </p>
          
          <Link href="/historieta" className="mt-12 group">
            <button 
              className="relative px-8 py-4 bg-black border border-[#A67C00] text-[#A67C00] font-bold tracking-widest uppercase overflow-hidden transition-all duration-300 group-hover:bg-[#990000] group-hover:text-white group-hover:border-[#990000]"
              style={{ fontFamily: siteConfig.typography.fontAlt }}
            >
              Leer la Historieta
            </button>
          </Link>
        </div>
      </section>

      {/* 2. Presentación del Artista / Obra */}
      <section className="relative z-20 py-24 bg-black">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 
            className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-8 text-white"
            style={{ fontFamily: siteConfig.typography.fontAlt }}
          >
            Sobre la Obra
          </h2>
          <Separador className="mx-auto mb-8" />
          <p 
            className="text-lg md:text-xl leading-relaxed text-[#D1D5DB]"
            style={{ fontFamily: siteConfig.typography.fontBody }}
          >
            {siteConfig.description} Una inmersión total en el horror crudo de la guerra y la supervivencia. 
            Esta novela gráfica explora lo macabro y la podredumbre humana mediante un entintado analógico asfixiante y un estilo visual implacable.
          </p>
        </div>
      </section>

      {/* 3. Accesos Rápidos (Arte y Tienda) */}
      <section className="relative z-20 w-full bg-black py-16 border-t border-[#111111]">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Tarjeta Galería de Arte */}
          <Link href="/arte" className="group block h-96 relative overflow-hidden bg-[#0A0A0A] border border-[#222222] hover:border-[#990000] transition-colors duration-500">
            <div className="absolute inset-0 w-full h-full">
               <Image 
                src="/WhatsApp Image 2026-03-27 at 20.39.52.jpeg" // El Desollado
                alt="Galería de Arte"
                fill
                className="object-cover object-top opacity-30 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-bold text-white uppercase tracking-widest mb-2" style={{ fontFamily: siteConfig.typography.fontHeading }}>Galería de Arte</h3>
              <p className="text-[#A67C00] group-hover:text-[#990000] transition-colors duration-300">Explorar los Originales →</p>
            </div>
          </Link>

          {/* Tarjeta Tienda de Productos */}
          <Link href="/productos" className="group block h-96 relative overflow-hidden bg-[#0A0A0A] border border-[#222222] hover:border-[#990000] transition-colors duration-500">
            <div className="absolute inset-0 w-full h-full">
               <Image 
                src="/WhatsApp Image 2026-03-27 at 20.41.57.jpeg" // Monstruo del Pantano
                alt="Tienda de Productos"
                fill
                className="object-cover opacity-30 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-bold text-white uppercase tracking-widest mb-2" style={{ fontFamily: siteConfig.typography.fontHeading }}>Tienda y Prints</h3>
              <p className="text-[#A67C00] group-hover:text-[#990000] transition-colors duration-300">Conseguir Merchandising →</p>
            </div>
          </Link>

        </div>
      </section>

    </main>
  );
}
