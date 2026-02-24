import type { Metadata } from "next";
import { Urbanist, Cinzel, Montserrat } from "next/font/google"; // Re-import Urbanist

import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


import Navbar from "@/components/layout/Navbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Emperatriz taller gráfico",
  description: "Un mundo de creatividad para cada momento",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-black font-sans ${urbanist.variable} ${cinzel.variable} ${montserrat.variable} relative`}>
        {/* Background Image Layer */}
        <div className="fixed -z-50 bg-[url('/bg-orange.jpg')] bg-cover bg-center bg-no-repeat 
          max-md:w-[150vh] max-md:h-[150vw] max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:-rotate-90 
          md:inset-0 md:w-full md:h-full md:transform-none pointer-events-none"
        />

        <Navbar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
