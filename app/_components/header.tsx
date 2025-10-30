"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    }

    window.addEventListener('scroll', handleScroll)
    return ( )=> window.removeEventListener('scroll', handleScroll)
  },[])

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Filmes", href: "/movie" },
    { name: "Series", href: "/series" },
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-1 transition-all duration-500 ${scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-black/80 to-transparent"}`}> 
    <div className="max-w-[1920px] mx-auto px-4 p-2 md:px-8">
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            className="rounded-md"
            src="/pop-corn-club.png"
            width={150}
            height={90}
            alt="logo"
          />
        </Link>
        <nav className=" hidden md:flex gap-6">
          {navItems.map((item) => {
            const isActive = item.href === pathname;

            return (
              <motion.button
                key={item.name}
                className={`text-xl cursor-pointer hover:text-red-400 transition-colors ${isActive ? 'text-red-400' : '' }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={item.href} className="p-1">
                  {item.name}
                </Link>
              </motion.button>
            );
          })}
        </nav>

        <motion.button
          className="h-[40px] p-2 hover:bg-red-500 rounded-full transition-colors"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Search className="cursor-pointer" />
        </motion.button>
        </div>
        </div>
    </header>
  );
}
