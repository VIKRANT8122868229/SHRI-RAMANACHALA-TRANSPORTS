import Image from "next/image";
import Reveal from "./Reveal";
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock3,
  Truck,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#07182f] via-[#0B2447] to-[#123B73] min-h-screen flex items-center"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-red-600/10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <Reveal direction="left">
          <div>
            <span className="inline-flex items-center bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
              Fleet Owners • ODC Transporters
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              SHRI
              <br />
              <span className="text-red-500">RAMANACHALA</span>
              <br />
              TRANSPORTS
            </h1>

            <p className="mt-8 text-gray-300 text-lg md:text-xl leading-9 max-w-xl">
              Reliable transportation solutions for Containers,
              Heavy Machinery, Industrial Equipment,
              ODC Cargo and Mixed Cargo across
              Tamil Nadu, Kerala and Andhra Pradesh.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="tel:+919442268229"
                className="bg-red-600 hover:bg-red-700 transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3 shadow-xl"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/919442268229"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white hover:bg-white hover:text-[#07182f] transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-3"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

            {/* Trust Cards */}
            <div className="grid grid-cols-3 gap-4 mt-14">

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 hover:-translate-y-2 transition duration-300">
                <ShieldCheck className="mx-auto text-red-500 mb-2" />
                <p className="text-white font-semibold">Safe</p>
                <span className="text-gray-300 text-sm">
                  Transport
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 hover:-translate-y-2 transition duration-300">
                <Clock3 className="mx-auto text-red-500 mb-2" />
                <p className="text-white font-semibold">
                  On-Time
                </p>
                <span className="text-gray-300 text-sm">
                  Delivery
                </span>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 text-center border border-white/10 hover:-translate-y-2 transition duration-300">
                <Truck className="mx-auto text-red-500 mb-2" />
                <p className="text-white font-semibold">
                  South India
                </p>
                <span className="text-gray-300 text-sm">
                  Coverage
                </span>
              </div>

            </div>

          </div>
        </Reveal>

        {/* Right Side */}
        <Reveal direction="right" delay={0.2}>
          <div className="flex justify-center">
            <Image
              src="/images/hero/truck.jpg"
              alt="Truck"
              width={900}
              height={700}
              priority
              className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </Reveal>

      </div>
    </section>
  );
}