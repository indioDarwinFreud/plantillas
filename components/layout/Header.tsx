"use client";

import Link from "next/link";
import { Cinzel } from "next/font/google";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { siteConfig } from "@/config";
import { useCartStore } from "@/store/cartStore";

const cinzel = Cinzel({ subsets: ["latin"] });

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { toggleCart, getTotalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = mounted ? getTotalItems() : 0;

  return (
    <div className="fixed z-40 w-full top-5 flex items-center justify-between px-6 sm:px-10 pointer-events-none">
      {/* Logo (izquierda) */}
      <header className="pointer-events-auto">
        <Link href="/" className="group">
          <div className="flex flex-col items-center justify-center p-2 transition-all duration-500 bg-transparent">
            <Image
              src={siteConfig.logo.main}
              alt={`Logo ${siteConfig.name}`}
              width={100}
              height={50}
              className={`rounded-xl transition-all duration-500 group-hover:scale-105
                ${scrolled ? "" : "drop-shadow-lg"}`}
              style={
                scrolled
                  ? {
                      filter:
                        "drop-shadow(0 0 15px rgba(255,255,255,1)) drop-shadow(0 0 5px rgba(255,255,255,1))",
                    }
                  : {}
              }
            />
          </div>
        </Link>
      </header>

      {/* Ícono Carrito (derecha) */}
      <button
        id="cart-toggle-button"
        onClick={toggleCart}
        className="pointer-events-auto relative p-3 bg-black/60 backdrop-blur-md border border-[#222] hover:border-[#990000] transition-all duration-300 group"
        aria-label="Abrir carrito"
      >
        <ShoppingBag
          size={22}
          className="text-[#999] group-hover:text-white transition-colors"
        />
        {totalItems > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-[#990000] text-white text-[10px] font-black min-w-[18px] h-[18px] flex items-center justify-center px-1">
            {totalItems > 99 ? "99+" : totalItems}
          </span>
        )}
      </button>
    </div>
  );
};

export default Header;
