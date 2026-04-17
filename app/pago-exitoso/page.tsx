"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { siteConfig } from "@/config";
import { Suspense } from "react";

function PagoExitosoContent() {
    const params = useSearchParams();
    const order = params.get("order");

    return (
        <main className="min-h-screen bg-black flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center flex flex-col items-center gap-8">
                {/* Ícono */}
                <div className="relative">
                    <div className="w-24 h-24 border border-[#333] flex items-center justify-center">
                        <CheckCircle size={48} className="text-[#990000]" />
                    </div>
                    {/* Decoración de esquinas */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#990000]" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#990000]" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#990000]" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#990000]" />
                </div>

                {/* Título */}
                <div>
                    <h1
                        className="text-3xl font-black text-white uppercase tracking-[0.2em] mb-3"
                        style={{ fontFamily: siteConfig.typography.fontHeading }}
                    >
                        Pago Confirmado
                    </h1>
                    <p className="text-[#666] text-sm leading-relaxed">
                        Tu pedido fue procesado exitosamente. Nos pondremos en contacto con vos a la brevedad para coordinar el envío.
                    </p>
                </div>

                {/* Order ID */}
                {order && (
                    <div className="w-full border border-[#1a1a1a] bg-[#0A0A0A] px-6 py-4">
                        <p className="text-[#444] text-[10px] uppercase tracking-widest mb-1">
                            Número de Orden
                        </p>
                        <p className="text-[#A67C00] text-xs font-mono break-all">{order}</p>
                    </div>
                )}

                {/* CTA */}
                <Link
                    href="/"
                    className="w-full py-3 bg-[#990000]/20 border border-[#990000] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#990000] transition-all duration-300 flex items-center justify-center"
                    style={{ fontFamily: siteConfig.typography.fontAlt }}
                >
                    Volver al Inicio
                </Link>
            </div>
        </main>
    );
}

export default function PagoExitoso() {
    return (
        <Suspense>
            <PagoExitosoContent />
        </Suspense>
    );
}
