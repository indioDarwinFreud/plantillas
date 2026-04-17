"use client";

/**
 * CartDrawer — Panel lateral de carrito con estética Gothic Serpent
 * Se abre desde cualquier botón "Añadir al Carrito" o desde el ícono del Header.
 * El pago final se procesa vía PayPal embebido aquí mismo.
 */

import { useCartStore } from "@/store/cartStore";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config";
import dynamic from "next/dynamic";

// Cargamos PayPal solo en el cliente (evita errores de SSR con el SDK externo)
const PayPalCheckoutButton = dynamic(
    () => import("@/components/checkout/PayPalCheckoutButton"),
    { ssr: false }
);

export default function CartDrawer() {
    const {
        items,
        isOpen,
        closeCart,
        removeItem,
        updateQuantity,
        getTotalPrice,
        getTotalItems,
    } = useCartStore();

    const total = getTotalPrice();
    const totalItems = getTotalItems();

    return (
        <>
            {/* Overlay oscuro de fondo */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                    onClick={closeCart}
                />
            )}

            {/* Panel lateral */}
            <div
                className={`fixed top-0 right-0 z-[70] h-screen w-full max-w-md flex flex-col
                    bg-[#0A0A0A] border-l border-[#1a1a1a] shadow-2xl
                    transition-transform duration-500 ease-in-out
                    ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Header del Drawer */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a]">
                    <div className="flex items-center gap-3">
                        <ShoppingBag size={20} className="text-[#990000]" />
                        <h2
                            className="text-white text-sm font-black uppercase tracking-[0.25em]"
                            style={{ fontFamily: siteConfig.typography.fontHeading }}
                        >
                            Carrito
                        </h2>
                        {totalItems > 0 && (
                            <span className="bg-[#990000] text-white text-xs font-bold px-2 py-0.5 min-w-5 text-center">
                                {totalItems}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={closeCart}
                        className="text-[#555] hover:text-white transition-colors p-1"
                    >
                        <X size={22} />
                    </button>
                </div>

                {/* Contenido */}
                <div className="flex-1 overflow-y-auto py-4">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-8">
                            <ShoppingBag size={48} className="text-[#222]" />
                            <p
                                className="text-[#444] text-sm uppercase tracking-widest"
                                style={{ fontFamily: siteConfig.typography.fontAlt }}
                            >
                                Tu arsenal está vacío
                            </p>
                        </div>
                    ) : (
                        <ul className="flex flex-col gap-0 divide-y divide-[#111]">
                            {items.map((item) => (
                                <li key={item.id} className="flex gap-4 px-6 py-5">
                                    {/* Imagen */}
                                    <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden border border-[#1a1a1a]">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1 flex flex-col justify-between min-w-0">
                                        <div>
                                            <p
                                                className="text-white text-sm font-bold truncate"
                                                style={{ fontFamily: siteConfig.typography.fontAlt }}
                                            >
                                                {item.title}
                                            </p>
                                            <p className="text-[#990000] text-sm font-black mt-0.5">
                                                USD ${(item.price ?? 0).toFixed(2)}
                                            </p>
                                        </div>

                                        {/* Controles de cantidad */}
                                        <div className="flex items-center gap-3 mt-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="p-1 border border-[#333] text-[#999] hover:text-white hover:border-[#990000] transition-colors"
                                            >
                                                <Minus size={12} />
                                            </button>
                                            <span className="text-white text-sm font-bold w-4 text-center">
                                                {item.quantity}
                                            </span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="p-1 border border-[#333] text-[#999] hover:text-white hover:border-[#990000] transition-colors"
                                            >
                                                <Plus size={12} />
                                            </button>

                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="ml-auto p-1 text-[#333] hover:text-[#990000] transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Footer con total y checkout */}
                {items.length > 0 && (
                    <div className="border-t border-[#1a1a1a] px-6 py-6 flex flex-col gap-4 bg-[#0A0A0A]">
                        {/* Subtotal */}
                        <div className="flex items-center justify-between">
                            <span
                                className="text-[#666] text-xs uppercase tracking-widest"
                                style={{ fontFamily: siteConfig.typography.fontAlt }}
                            >
                                Total
                            </span>
                            <span className="text-white text-xl font-black">
                                USD ${total.toFixed(2)}
                            </span>
                        </div>

                        {/* Botón PayPal */}
                        <PayPalCheckoutButton />

                        {/* Nota de seguridad */}
                        <p className="text-center text-[#333] text-[10px] uppercase tracking-widest">
                            Pago seguro vía PayPal · Envío internacional
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}
