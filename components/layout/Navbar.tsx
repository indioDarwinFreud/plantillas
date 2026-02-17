"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data"

const Navbar = () => {
    const router = usePathname()
    return (
        <div className="fixed z-50 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    {itemsNavbar.map((item) => (
                        <div key={item.id}
                            className={`px-3 py-2 transition-all duration-300 relative group
                            rounded-full cursor-pointer hover:scale-110
                            ${router === item.link ? 'bg-transparent border border-primary text-primary shadow-[0_0_15px_rgba(249,115,22,0.5)] scale-110' : 'text-white/80 border border-transparent hover:text-white hover:bg-white/10'}`}
                        >
                            <Link href={item.link} className="relative z-10">{item.icon}</Link>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default Navbar