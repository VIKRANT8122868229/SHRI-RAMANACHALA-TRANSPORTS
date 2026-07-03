import Image from "next/image";
import { Phone, MessageCircle, ShieldCheck, Clock3, Truck } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#07182f] via-[#0B2447] to-[#123B73] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <div>

          <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Fleet Owners & ODC Transporters
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black text-white leading-tight">
            SHRI
            <br />
            RAMANACHALA
            <br />
            TRANSPORTS
          </h1>

          <p className="mt-8 text-gray-300 text-xl leading-9 max-w-xl">
            Trusted transportation solutions for Containers,
            Heavy Machinery, Industrial Equipment and Mixed Cargo
            across Tamil Nadu, Kerala and Andhra Pradesh.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="tel:+919442268229"
              className="bg-red-600 hover:bg-red-700 transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2"
            >
              <Phone size={20} />
              Call Now
            </a>

            <a
              href="https://wa.me/919442268229"
              target="_blank"
              className="border border-white hover:bg-white hover:text-black transition px-8 py-4 rounded-xl text-white font-semibold flex items-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>

          </div>

          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <ShieldCheck className="text-red-500 mb-2" />
              <p className="text-white font-semibold">Safe</p>
              <span className="text-gray-400 text-sm">
                Transport
              </span>
            </div>

            <div>
              <Clock3 className="text-red-500 mb-2" />
              <p className="text-white font-semibold">
                On-Time
              </p>
              <span className="text-gray-400 text-sm">
                Delivery
              </span>
            </div>

            <div>
              <Truck className="text-red-500 mb-2" />
              <p className="text-white font-semibold">
                South India
              </p>
              <span className="text-gray-400 text-sm">
                Coverage
              </span>
            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <Image
            src="/images/hero/truck.jpg"
            alt="Truck"
            width={850}
            height={650}
            priority
            className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] object-contain"
          />

        </div>

      </div>
    </section>
  );
}