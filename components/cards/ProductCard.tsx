"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, Ruler, ShoppingCart, Check } from "lucide-react";
import { siteConfig } from "@/config";
import type { Product } from "@/types";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

interface ProductCardProps {
    product: Product;
    /** Delay para la animación FadeIn (opcional) */
    delay?: number;
    /** Función para manejar el click en la imagen (ej: zoom modal) */
    onImageClick?: (image: string) => void;
}

/**
 * ProductCard — Tarjeta de producto unificada
 * Se utiliza tanto en la Home (BestSellers) como en el catálogo (/products).
 * Centraliza el diseño, colores y lógica de contacto por WhatsApp.
 */
export default function ProductCard({ product, onImageClick }: ProductCardProps) {
    const whatsappUrl = `https://wa.me/${siteConfig.contact.phone.replace("+", "")}?text=Hola, me interesa el producto: ${encodeURIComponent(product.title)}`;
    const { addItem } = useCartStore();
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        addItem(product);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <Card
            className="overflow-hidden border-primary/20 hover:border-primary/50 transition-all duration-500 group shadow-2xl flex flex-col h-full hover:-translate-y-2 cursor-pointer relative backdrop-blur-md"
            style={{
                backgroundColor: siteConfig.theme.backgroundCard,
                backgroundImage: `url(${(siteConfig.theme as any).cardImage})`,
                backgroundSize: (siteConfig.theme as any).cardImage.startsWith('data:') ? 'auto' : 'cover',
                backgroundRepeat: 'repeat',
                backgroundBlendMode: 'overlay'
            }}
        >
            {/* Contenedor de Imagen */}
            <div
                className="h-64 relative overflow-hidden bg-neutral-200 group/img"
                onClick={() => onImageClick?.(product.image)}
            >
                {/* Sombra interna suave */}
                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] z-10 pointer-events-none" />

                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                />

                {/* Overlay de Zoom (solo visible si hay onImageClick) */}
                {onImageClick && (
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <div className="flex items-center gap-2 text-white font-bold text-sm bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                            <Ruler size={16} /> Ver Detalle
                        </div>
                    </div>
                )}

                {/* Overlay quitado ya que Category fue deprecado */}
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col flex-grow relative z-20">
                <div className="mb-2">
                    <h3
                        className="text-xl font-bold transition-colors"
                        style={{ color: siteConfig.theme.textColors.cardTitle }}
                    >
                        {product.title}
                    </h3>
                    {product.location && (
                        <p
                            className="text-xs font-semibold uppercase tracking-widest mt-1"
                            style={{ color: siteConfig.theme.textColors.cardMuted }}
                        >
                            {product.location}
                        </p>
                    )}
                </div>

                <p
                    className="text-sm mb-6 flex-grow leading-relaxed font-medium"
                    style={{ color: siteConfig.theme.textColors.cardBody }}
                >
                    {product.description}
                </p>

                {/* Footer de Tarjeta / Botones */}
                <div className="mt-auto pt-4 border-t border-black/20 flex flex-col gap-2">
                    {/* Precio */}
                    {product.price && (
                        <p className="text-white font-black text-lg">
                            USD ${product.price.toFixed(2)}
                        </p>
                    )}

                    {/* Botón Añadir al Carrito */}
                    <button
                        onClick={handleAddToCart}
                        className={`w-full h-11 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all duration-300 border
                            ${ added
                                ? 'bg-green-900/40 border-green-700 text-green-400'
                                : 'bg-[#990000]/20 border-[#990000] text-white hover:bg-[#990000]'
                            }`}
                    >
                        {added ? <Check size={16} /> : <ShoppingCart size={16} />}
                        {added ? "¡Agregado!" : "Añadir al Carrito"}
                    </button>

                    {/* Botón Consultar por WhatsApp */}
                    <Link
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                    >
                        <Button
                            className="w-full h-10 font-bold flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                            style={{
                                background: "transparent",
                                color: siteConfig.theme.textColors.cardMuted,
                                border: `1px solid #333`,
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = "#555";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = "#333";
                                e.currentTarget.style.color = siteConfig.theme.textColors.cardMuted;
                            }}
                        >
                            <MessageCircle size={14} />
                            Consultar por WhatsApp
                        </Button>
                    </Link>
                </div>
            </div>
        </Card>
    );
}
