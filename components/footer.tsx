"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07182f] text-white">

      {/* Background Glow */}

      <div className="absolute -top-32 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Company */}

            <div>

              <Image
                src="/images/logo/srt-logoo.png"
                alt="Shri Ramanachala Transports"
                width={300}
                height={120}
                className="h-20 w-auto"
              />

              <p className="text-gray-400 leading-8 mt-6">
                Reliable transportation solutions for containers,
                heavy machinery, industrial equipment, ODC cargo and
                mixed cargo across South India.
              </p>

              <a
                href="https://wa.me/919442268229"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-green-600 hover:bg-green-700 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                WhatsApp Us
                <ArrowUpRight size={18} />
              </a>

            </div>

            {/* Services */}

            <div>

              <h3 className="text-xl font-bold text-red-500 mb-6">
                Services
              </h3>

              <ul className="space-y-4 text-gray-300">

                <li className="hover:text-white transition cursor-pointer">
                  Container Transportation
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Heavy Machinery
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Industrial Equipment
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  ODC Transportation
                </li>

                <li className="hover:text-white transition cursor-pointer">
                  Mixed Cargo
                </li>

              </ul>

            </div>

            {/* Contact */}

            <div>

              <h3 className="text-xl font-bold text-red-500 mb-6">
                Contact
              </h3>

              <div className="space-y-5">

                <div className="flex gap-3">
                  <Phone className="text-red-500 shrink-0" />
                  <div>
                    <p>+91 94422 68229</p>
                    <p>+91 76670 72966</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mail className="text-red-500 shrink-0" />
                  <span className="break-all text-gray-300">
                    shriramanachalatransports@gmail.com
                  </span>
                </div>

                <div className="flex gap-3">
                  <MapPin className="text-red-500 shrink-0" />
                  <span className="text-gray-300">
                    137D/825, Karikalan Complex
                    <br />
                    Salem Road
                    <br />
                    Namakkal - 637001
                  </span>
                </div>

              </div>

            </div>

            {/* Coverage */}

            <div>

              <h3 className="text-xl font-bold text-red-500 mb-6">
                Service Area
              </h3>

              <div className="space-y-4">

                {[
                  "Tamil Nadu",
                  "Kerala",
                  "Karnataka",
                  "Andhra Pradesh",
                ].map((state) => (

                  <div
                    key={state}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                  >
                    <Truck
                      size={18}
                      className="text-red-500"
                    />

                    {state}

                  </div>

                ))}

              </div>

            </div>

          </div>

        </Reveal>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-5">

          <p className="text-gray-400 text-center">
            © 2026 Shri Ramanachala Transports. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-center">
            Designed & Developed with Next.js
          </p>

        </div>

      </div>

    </footer>
  );
}