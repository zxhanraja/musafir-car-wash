"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Works", href: "#works" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b pointer-events-none",
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-white/10 shadow-2xl py-4"
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between pointer-events-auto">
        {/* Logo */}
        <Link href="/" className="flex flex-col relative z-50 group">
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-brand-white leading-none uppercase group-hover:text-brand-red transition-colors duration-300">
            Musafir<span className="text-brand-red">.</span>
          </span>
          <span className="text-[7px] md:text-[9px] font-bold tracking-[0.4em] uppercase mt-1 text-brand-white/50">
            Car Wash
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold tracking-[0.3em] uppercase text-brand-white/70 hover:text-brand-white transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-brand-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden lg:block">
          <Link
            href="#booking"
            className="px-8 py-3.5 border border-brand-white/20 text-brand-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-white hover:text-brand-black transition-all duration-300 flex items-center gap-3 rounded-none"
          >
            Book Now
            <span className="text-brand-red group-hover:text-brand-black transition-colors">&rarr;</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden relative z-50 p-2 text-brand-white hover:text-brand-red transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out lg:hidden pointer-events-auto",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col items-center space-y-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black uppercase text-brand-white hover:text-brand-red transition-colors tracking-widest"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 px-10 py-5 bg-brand-white text-brand-black font-black uppercase tracking-[0.3em] text-xs hover:bg-brand-red hover:text-brand-white transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
