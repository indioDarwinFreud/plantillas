"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { itemsNavbar } from "@/data"

const Navbar = () => {
    const router = usePathname()
    return (
        <div className="fixed z-50 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10">
            <nav>
                <div className="flex items-center justify-center gap-2 px-6 py-1.5 rounded-full bg-black/80 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">

                    {/* First Half Items */}
                    {itemsNavbar.slice(0, 2).map((item) => (
                        <div key={item.id}
                            className={`px-3 py-1.5 transition-all duration-300 relative group
                            rounded-full cursor-pointer hover:scale-110
                            ${router === item.link ? 'bg-transparent border border-primary text-primary shadow-[0_0_15px_rgba(249,115,22,0.5)] scale-110' : 'text-white/80 border border-transparent hover:text-white hover:bg-white/10'}`}
                        >
                            <Link href={item.link} className="relative z-10">{item.icon}</Link>
                        </div>
                    ))}

                    {/* Central Imperia Virtual Icon - Popping out of the thin Navbar */}
                    <div className="relative mx-6 flex items-center justify-center">

                        {/* Large Circle container positioned absolute to not stretch the thin navbar */}
                        <div className="absolute w-[4.8rem] h-[4.8rem] rounded-full bg-black/90 border border-primary/50 flex items-center justify-center z-20 
                            shadow-[0_4px_25px_rgba(249,115,22,0.6)] hover:shadow-[0_8px_35px_rgba(249,115,22,0.9)] 
                            transform -translate-y-2 hover:-translate-y-3 transition-all duration-500 cursor-pointer group">

                            {/* Inner Circle for depth */}
                            <div className="w-[3.6rem] h-[3.6rem] rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center">
                                {/* Text */}
                                <span className="font-serif text-[1.6rem] font-bold tracking-[0.1em] bg-clip-text text-transparent bg-gradient-to-br from-white via-orange-200 to-primary drop-shadow-lg ml-1">
                                    IV
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* Second Half Items */}
                    {itemsNavbar.slice(2, 4).map((item) => (
                        <div key={item.id}
                            className={`px-3 py-1.5 transition-all duration-300 relative group
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