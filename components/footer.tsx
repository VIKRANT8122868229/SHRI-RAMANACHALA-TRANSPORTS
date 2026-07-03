import {
  Phone,
  Mail,
  MapPin,
  Truck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07182f] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black text-red-600">
              SHRI RAMANACHALA
            </h2>

            <p className="font-semibold mt-2">
              TRANSPORTS
            </p>

            <p className="text-gray-400 leading-8 mt-6">
              Trusted transport partner for Containers,
              Heavy Machinery, Industrial Equipment and
              Mixed Cargo across Tamil Nadu, Kerala and
              Andhra Pradesh.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Services
            </h3>

            <ul className="space-y-3 text-gray-300">

              <li>Container Transport</li>

              <li>Heavy Machinery</li>

              <li>Industrial Equipment</li>

              <li>Mixed Cargo</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">

                <Phone className="text-red-500" size={18} />

                <span>
                  +91 94422 68229
                </span>

              </div>

              <div className="flex gap-3">

                <Phone className="text-red-500" size={18} />

                <span>
                  +91 76670 72966
                </span>

              </div>

              <div className="flex gap-3">

                <Mail className="text-red-500" size={18} />

                <span className="break-all">
                  shriramanachalatransports@gmail.com
                </span>

              </div>

              <div className="flex gap-3">

                <MapPin className="text-red-500" size={18} />

                <span>
                  Namakkal,
                  Tamil Nadu
                </span>

              </div>

            </div>

          </div>

          {/* Coverage */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Service Area
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3">

                <Truck className="text-red-500" size={18} />

                Tamil Nadu

              </div>

              <div className="flex gap-3">

                <Truck className="text-red-500" size={18} />

                Kerala

              </div>

              <div className="flex gap-3">

                <Truck className="text-red-500" size={18} />

                Andhra Pradesh

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © 2026 SHRI RAMANACHALA TRANSPORTS. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed with ❤️ using Next.js
          </p>

        </div>

      </div>

    </footer>
  );
}