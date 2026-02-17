import React from 'react';

const DiagonalStripes = ({ className }: { className?: string }) => {
    return (
        // 📱 MOBILE: skew-x-[45deg] (Less steep) | 💻 PC: skew-x-[80deg] (Very steep)
        // 📱 MOBILE: skew-x-[75deg] (Adjusted for "flat" look) | 💻 PC: skew-x-[80deg]
        <div className={`absolute bottom-0 left-0 w-full h-20 flex overflow-hidden pointer-events-none ${className}`}>
            {/* Bloque Naranja Principal */}
            <div className="h-full flex-1 bg-primary/95 shadow-2xl relative border-r-4 border-black/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30" />
            </div>
            {/* Franja Negra - 📱 w-4 | 💻 w-10 */}
            <div className="h-full w-4 md:w-10 bg-black/90 shadow-lg" />
            {/* Franja Blanca - 📱 w-2 | 💻 w-6 */}
            <div className="h-full w-2 md:w-6 bg-white/90 shadow-lg" />
        </div>
    );
};

export default DiagonalStripes;
