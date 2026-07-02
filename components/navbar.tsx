"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#07182f]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-black text-red-600">
              SRT
            </h1>
            <span className="hidden sm:block text-white text-xs tracking-[3px]">
              SHRI RAMANACHALA TRANSPORTS
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <a href="#" className="text-white hover:text-red-500 transition">
              Home
            </a>
            <a href="#about" className="text-white hover:text-red-500 transition">
              About
            </a>
            <a href="#services" className="text-white hover:text-red-500 transition">
              Services
            </a>
            <a href="#whychoose" className="text-white hover:text-red-500 transition">
              Why Choose Us
            </a>
            <a href="#contact" className="text-white hover:text-red-500 transition">
              Contact
            </a>
          </div>

          {/* Phone */}
          <a
            href="tel:+9199442268229"
            className="hidden lg:flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl text-white font-semibold"
          >
            <Phone size={18} />
            94422 68229
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 text-white"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden pb-6 flex flex-col gap-5">

            <a href="#" onClick={closeMenu} className="text-white">
              Home
            </a>

            <a href="#about" onClick={closeMenu} className="text-white">
              About
            </a>

            <a href="#services" onClick={closeMenu} className="text-white">
              Services
            </a>

            <a href="#whychoose" onClick={closeMenu} className="text-white">
              Why Choose Us
            </a>

            <a href="#contact" onClick={closeMenu} className="text-white">
              Contact
            </a>

            <a
              href="tel:+9199442268229"
              className="bg-red-600 text-white rounded-xl px-4 py-3 flex items-center gap-2 w-fit"
            >
              <Phone size={18} />
              94422 68229
            </a>

          </div>
        )}
      </div>
    </nav>
  );
}