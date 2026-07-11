"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#whychooseus" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPosition = window.scrollY + 140;

      links.forEach((link) => {
        const section = document.querySelector(link.href);

        if (!section) return;

        const top = (section as HTMLElement).offsetTop;
        const height = (section as HTMLElement).offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(link.name);
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
          ? "bg-[#07182f]/85 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
<div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">        {/* Logo */}

        <a
  href="#home"
  className="flex items-center shrink-0"
>
  <Image
  src="/images/logo/srt-logoo.png"
  alt="Shri Ramanachala Transports"
  width={340}
  height={150}
  priority
  className="h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
/>
</a>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-3 py-2">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                active === link.name
                  ? "bg-red-600 text-white shadow-lg"
                  : "text-gray-200 hover:text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>

          ))}

        </nav>

        {/* Call Button */}

        <a
          href="tel:+919442268229"
className="hidden lg:flex items-center gap-2 bg-red-600 hover:bg-red-700 hover:scale-105 transition-all duration-300 rounded-full px-7 py-4 text-white font-semibold shadow-xl hover:shadow-red-500/30"        >
          <Phone size={20} />

          <span>94422 68229</span>
        </a>

        {/* Mobile Toggle */}

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-[#07182f]/95 backdrop-blur-xl border-t border-white/10">

          {links.map((link) => (

            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-8 py-5 transition ${
                active === link.name
                  ? "bg-red-600 text-white"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {link.name}
            </a>

          ))}

          <a
            href="tel:+919442268229"
            className="flex items-center justify-center gap-2 bg-red-600 text-white font-semibold m-6 py-4 rounded-xl"
          >
            <Phone size={20} />
            94422 68229
          </a>

        </div>
      </div>

    </header>
  );
}