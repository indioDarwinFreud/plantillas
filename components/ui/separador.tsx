import FadeIn from "./FadeIn";

interface SeparadorProps {
    className?: string;
}

export default function Separador({ className = "" }: SeparadorProps) {
    return (
        <FadeIn delay={0.3} direction="up" className={`w-full flex justify-center mb-8 ${className}`}>
            <div className="w-48 md:w-64 h-[2px] bg-gradient-to-r from-transparent via-[#990000] to-transparent shadow-[0_0_10px_rgba(153,0,0,0.5)]" />
        </FadeIn>
    );
}