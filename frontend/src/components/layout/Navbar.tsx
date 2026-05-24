"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Public Work", href: "/#work" },
  { label: "Crisis Work", href: "/#crisis" },
  { label: "Good Seed Foundation", href: "/foundation", isHighlight: true },
  { label: "Media Archive", href: "/archive" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center space-x-4 group z-50 relative">
            <div className="relative w-12 h-12 overflow-hidden rounded-full shadow-md border-2 border-white transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="/logo.jpeg" 
                alt="Kunche Ramanarao" 
                fill 
                sizes="48px" 
                className="object-cover" 
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-lg tracking-tight leading-none transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white drop-shadow-md'}`}>
                KUNCHE RAMANARAO
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-1 transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-primary drop-shadow-md brightness-150'}`}>
                For Amalapuram
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group ${
                  link.isHighlight 
                    ? (isScrolled ? "text-secondary hover:text-secondary/80" : "text-secondary drop-shadow-md hover:text-white brightness-110") 
                    : isScrolled ? "text-slate-600 hover:text-primary" : "text-white/90 hover:text-white drop-shadow-md"
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled ? 'w-0' : 'w-0'} ${link.isHighlight ? 'bg-secondary' : 'bg-white'}`}></span>
              </Link>
            ))}
            
            <div className="pl-4 border-l border-slate-300/50">
              <Link href="/#contact">
                <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 h-10 text-xs font-bold uppercase tracking-wider shadow-lg transition-transform hover:translate-y-[-2px]">
                  Contact Office
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden relative z-50 p-2 -mr-2 transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex items-center justify-center relative">
              <span className={`transform transition-all duration-300 absolute h-[2px] w-full bg-current ${isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}></span>
              <span className={`transform transition-all duration-300 absolute h-[2px] w-full bg-current ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
              <span className={`transform transition-all duration-300 absolute h-[2px] w-full bg-current ${isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}></span>
            </div>
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col pt-32 px-6 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col space-y-6 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.div 
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-black tracking-tight block ${link.isHighlight ? 'text-secondary' : 'text-slate-900'}`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-10 border-t border-slate-200"
            >
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-none h-14 text-sm font-bold uppercase tracking-wider shadow-lg flex items-center justify-between px-6">
                  Contact Office <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
