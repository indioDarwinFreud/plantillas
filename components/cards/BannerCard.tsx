"use client";



import DiagonalStripes from "@/components/ui/DiagonalStripes";

interface BannerCardProps {
  title: string;
  description: string;
}

const BannerCard = ({ title, description }: BannerCardProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none flex items-end">
      <DiagonalStripes />
      {/* banda inferior tipo placa gráfica */}
      <div className="w-full h-20 relative overflow-hidden">




        {/* contenido del texto */}
        <div className="relative h-full px-2 flex flex-col justify-center z-10 max-w-3xl">
          {/* 📱 MOBILE: text-2xl | 💻 PC: md:text-5xl */}
          <h2 className="text-2xl md:text-5xl font-serif font-black text-darkBg mb-1 tracking-wide drop-shadow-lg uppercase stroke-black">
            {title}
          </h2>

          {/* 📱 MOBILE: text-xs | 💻 PC: md:text-xl */}
          <p className="text-white/95 text-xs md:text-xl font-medium drop-shadow-md line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
