"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Filmes", href: "/filmes" },
    { name: "Series", href: "/series" },
  ];
  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-background to-transparent backdrop-blur-sm p-4 mt-1">
      <div className="flex items-center justify-around">
        <Link href="/">
          <Image
            className="rounded-md"
            src="/logo-2.png"
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
    </header>
  );
}
