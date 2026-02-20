"use client"


import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import HeroCarousel from "@/components/sections/HeroCarousel";

import FadeIn from "@/components/ui/FadeIn"; // Import the component
import FeatureSection from "@/components/sections/FeatureSection";
import FeaturedWorks from "@/components/sections/FeaturedWorks";
//import { testimonialsData } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="absolute inset-0 z-0">

      </div>

      {/* Carousel Section */}
      <FadeIn delay={0.2} className="relative z-30 w-full max-w-7xl aspect-[5/4] md:aspect-[21/9] mx-auto mt-32 md:mt-40 shadow-2xl bg-white flex items-center justify-center rounded-lg overflow-hidden">
        <HeroCarousel />
      </FadeIn>


      <FeatureSection />

      <FeaturedWorks />


      {/* Testimonials Preview Section */}
{/*     <div className="mt-32 mb-20">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-primary">
            Lo que dicen nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 drop-shadow-sm">Clientes</span>
          </h2>
        </FadeIn>

      </div>
*/}
    </main>
  );
}
