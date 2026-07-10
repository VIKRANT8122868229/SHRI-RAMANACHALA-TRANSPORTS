"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Choose Us", href: "#whychooseus" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((item) => ({
        name: item.name,
        element: document.querySelector(item.href),
      }));

      const scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        if (!section.element) return;

        const top = (section.element as HTMLElement).offsetTop;
        const height = (section.element as HTMLElement).offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(section.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07182f]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

        {/* Logo */}

        <a href="#home" className="group">

          <h1 className="text-red-600 text-4xl font-black tracking-wide transition group-hover:scale-105">
            SRT
          </h1>

          <p className="text-white text-sm tracking-[4px] group-hover:text-red-400 transition">
            SHRI RAMANACHALA TRANSPORTS
          </p>

        </a>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-2 bg-white/5 rounded-full px-3 py-2 border border-white/10 backdrop-blur-xl">

          {links.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className={`relative px-5 py-2 rounded-full transition-all duration-300 font-medium ${
                active === item.name
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.name}
            </a>

          ))}

        </nav>

        {/* Call */}

        <a
          href="tel:+919442268229"
          className="hidden lg:flex items-center gap-2 bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-full font-semibold text-white shadow-xl"
        >
          <Phone size={18} />
          94422 68229
        </a>

        {/* Mobile */}

        <button
          onClick={() => setMobile(!mobile)}
          className="lg:hidden text-white"
        >
          {mobile ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobile ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#07182f]/95 backdrop-blur-xl border-t border-white/10">

          {links.map((item) => (

            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobile(false)}
              className={`block px-8 py-5 transition ${
                active === item.name
                  ? "bg-red-600 text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {item.name}
            </a>

          ))}

        </div>
      </div>

    </header>
  );
}