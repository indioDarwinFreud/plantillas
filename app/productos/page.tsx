"use client";

import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data";
import { siteConfig } from "@/config";
import Separador from "@/components/ui/separador";
import { ShoppingCart, MessageCircle, Check } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

/**
 * TiendaLayout — Página del catálogo de productos.
 *
 * Es un Client Component ("use client") porque necesita:
 *  - useCartStore: para llamar a addItem y abrir el CartDrawer.
 *  - useState: para el feedback visual "¡Agregado!" por producto.
 */
export default function TiendaLayout() {

  // addItem: agrega el producto al carrito y abre el Drawer automáticamente.
  const { addItem } = useCartStore();

  // Estado local para saber qué producto mostró el feedback "¡Agregado!".
  // Guardamos el id del producto, no solo un boolean, para soportar múltiples cards.
  const [addedId, setAddedId] = useState<number | null>(null);

  /**
   * handleAddToCart — Agrega el producto al carrito y muestra feedback.
   * Tras 2 segundos vuelve al estado normal.
   */
  const handleAddToCart = (item: typeof productsData[0]) => {
    addItem(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#000000] selection:bg-[#990000] selection:text-white">
      <div className="container mx-auto px-4">
        
        {/* Encabezado de sección */}
        <header className="text-center mb-16">
          <h1 
            className="text-4xl md:text-5xl font-black uppercase tracking-[0.2em] text-[#A67C00] drop-shadow-lg mb-4"
            style={{ fontFamily: siteConfig.typography.fontHeading }}
          >
            Tienda <span className="text-[#990000]">&amp; Prints</span>
          </h1>
          <Separador className="mx-auto" />
          <p className="mt-6 text-[#9CA3AF] text-lg max-w-2xl mx-auto" style={{ fontFamily: siteConfig.typography.fontBody }}>
            Indumentaria, artes impresos y coleccionistas. Viste el horror de la trinchera.
          </p>
        </header>

        {/* Grilla de productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {productsData.map((item) => {
            const isAdded = addedId === item.id;
            const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=Hola, quiero consultar por el producto en la Tienda: ${encodeURIComponent(item.title)}`;
            
            return (
              <div 
                key={item.id} 
                className="group flex flex-col overflow-hidden bg-[#0A0A0A] border border-[#222222] hover:border-[#990000] transition-colors duration-500 rounded-none shadow-2xl"
              >
                {/* Imagen del producto */}
                <div className="relative h-[28rem] sm:h-[32rem] w-full bg-[#050505] p-4 flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={800}
                    className="object-contain w-full h-full max-h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  
                  {/* Badge de categoría */}
                  <div
                    className="absolute top-4 left-4 bg-black border border-[#A67C00] px-3 py-1 text-[#A67C00] text-xs uppercase font-bold tracking-widest z-10"
                    style={{ fontFamily: siteConfig.typography.fontAlt }}
                  >
                    {item.location}
                  </div>
                </div>

                {/* Detalle + botones de acción */}
                <div className="p-6 flex flex-col flex-1 border-t border-[#111111]">
                  <h2
                    className="text-2xl text-white font-bold tracking-wider mb-3 leading-tight uppercase"
                    style={{ fontFamily: siteConfig.typography.fontHeading }}
                  >
                    {item.title}
                  </h2>
                  <p
                    className="text-[#9CA3AF] text-sm leading-relaxed mb-4 flex-1"
                    style={{ fontFamily: siteConfig.typography.fontBody }}
                  >
                    {item.description}
                  </p>

                  {/* Precio */}
                  {item.price && (
                    <p className="text-white font-black text-xl mb-4">
                      USD ${item.price.toFixed(2)}
                    </p>
                  )}

                  {/* Botón principal: Añadir al Carrito */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 uppercase font-bold tracking-[0.2em] transition-all duration-300 border mb-3
                      ${isAdded
                        ? "bg-green-900/30 border-green-700 text-green-400"
                        : "bg-black border-[#990000] text-[#990000] hover:bg-[#990000] hover:text-white group-hover:shadow-[0_0_20px_rgba(153,0,0,0.5)]"
                      }`}
                    style={{ fontFamily: siteConfig.typography.fontAlt }}
                  >
                    {isAdded ? <Check size={20} /> : <ShoppingCart size={20} />}
                    {isAdded ? "¡Agregado al Carrito!" : "Añadir al Carrito"}
                  </button>

                  {/* Botón secundario: Consultar por WhatsApp */}
                  <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs text-[#555] hover:text-[#999] uppercase tracking-widest transition-colors duration-200 border border-[#1a1a1a] hover:border-[#333]"
                    style={{ fontFamily: siteConfig.typography.fontAlt }}
                  >
                    <MessageCircle size={14} />
                    Consultar por WhatsApp
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
