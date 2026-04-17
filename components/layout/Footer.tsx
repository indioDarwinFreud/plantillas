"use client";

import { contactData } from "@/data";
import { MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config";
import Separador from "@/components/ui/separador";

/**
 * Footer — Pie de página global adaptado a Gothic Serpent
 * Muestra CTA de Contacto, Redes Sociales integradas y Copyright.
 */
const Footer = () => {
    const locationData = contactData.find(c => c.title === "Ubicación");
    const socialData = contactData.filter(c => c.title === "Facebook" || c.title === "Instagram");
    const emailData = contactData.find(c => c.title === "Email");
    const phoneData = contactData.find(c => c.title === "Teléfono");
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#050505] border-t border-[#1a1a1a] relative overflow-hidden text-[#9CA3AF]">
            {/* CTA de Contacto / Enlistamiento */}
            <div className="w-full bg-[#0A0A0A] border-b border-[#1a1a1a] py-16">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="text-3xl font-black uppercase tracking-widest text-[#FFFFFF] drop-shadow-lg mb-4" style={{ fontFamily: siteConfig.typography.fontHeading }}>
                        Comunicaciones <span className="text-[#990000]">Tácticas</span>
                    </h3>
                    <Separador className="mx-auto mb-6" />
                    <p className="font-urbanist text-lg text-[#9CA3AF] mb-10 max-w-2xl mx-auto">
                        Para consultas editoriales, encargos de commissions o adquisición de arte original, establecé contacto por nuestras líneas oficiales.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        {phoneData && (
                            <Link href={phoneData.href} target="_blank" className="flex items-center gap-3 w-full sm:w-auto px-8 py-4 bg-[#990000] text-white font-bold tracking-[0.2em] uppercase border border-[#990000] hover:bg-black hover:text-[#990000] transition-colors duration-300">
                                <Phone size={20} /> Transmisión Segura
                            </Link>
                        )}
                        {emailData && (
                            <Link href={emailData.href} className="flex items-center gap-3 w-full sm:w-auto px-8 py-4 bg-transparent text-[#A67C00] font-bold tracking-[0.2em] uppercase border border-[#A67C00] hover:bg-[#A67C00] hover:text-black transition-colors duration-300">
                                <Mail size={20} /> Despacho Escrito
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer Base */}
            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-between text-center md:text-left mb-16">
                    
                    {/* Ubicación */}
                    <FadeIn delay={0.1} className="flex flex-col items-center md:items-start space-y-4">
                        <div className="flex items-center space-x-3 text-[#A67C00] mb-1">
                            <MapPin className="w-6 h-6" />
                            <h4 className="font-bold uppercase tracking-[0.2em] text-sm text-[#FFFFFF]" style={{ fontFamily: siteConfig.typography.fontAlt }}>
                                Comando Central
                            </h4>
                        </div>
                        {locationData && (
                            <Link href={locationData.href} target="_blank" className="font-urbanist text-[#6B7280] hover:text-[#FFFFFF] transition-all duration-300">
                                {locationData.description} <ExternalLink className="inline-block ml-1 w-3 h-3" />
                            </Link>
                        )}
                    </FadeIn>

                    {/* Logo & Social */}
                    <FadeIn delay={0.2} className="flex flex-col items-center justify-center space-y-6">
                        <div className="relative w-48 h-20 opacity-80 hover:opacity-100 transition-opacity duration-300">
                            <Image
                                src={siteConfig.logo.main}
                                alt={`Logo ${siteConfig.name}`}
                                fill
                                className="object-contain grayscale contrast-200 brightness-200"
                            />
                        </div>
                        {socialData.length > 0 && (
                            <div className="flex space-x-6">
                                {socialData.map((social) => (
                                    <Link key={social.id} href={social.href} target="_blank" className="p-3 bg-black border border-[#333333] text-[#A67C00] hover:text-white hover:bg-[#990000] hover:border-[#990000] transition-all duration-300">
                                        <social.icon className="w-5 h-5" />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </FadeIn>

                    {/* Aviso */}
                    <FadeIn delay={0.3} className="flex flex-col items-center md:items-end space-y-4">
                        <div className="text-right">
                           <h4 className="font-bold uppercase tracking-[0.2em] text-sm text-[#777777] mb-2" style={{ fontFamily: siteConfig.typography.fontAlt }}>Advertencia</h4>
                           <p className="font-urbanist text-[#555555] text-xs uppercase tracking-wider max-w-[200px] leading-relaxed">
                               Visualizar este material bajo riesgo propio. Horror gráfico asegurado.
                           </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Bottom Signature */}
                <FadeIn delay={0.4} className="w-full pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 border-t border-[#1a1a1a]">
                    <p className="font-urbanist text-[#444444] text-xs tracking-widest uppercase">
                        &copy; {currentYear} {siteConfig.name}. Todos los derechos reservados.
                    </p>

                    <div className="font-urbanist text-[#444444] text-xs tracking-widest uppercase flex items-center gap-2">
                        <span>Framework by</span>
                        <Link href="https://imperiavirtual.com" target="_blank" className="font-black text-[#666666] tracking-[0.2em] hover:text-[#990000] transition-colors duration-300">
                            IMPERIA VIRTUAL
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
};

export default Footer;
