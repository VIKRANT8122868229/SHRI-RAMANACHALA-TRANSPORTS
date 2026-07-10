import {
  Phone,
  Mail,
  MapPin,
  Truck,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07182f] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company */}
          <div>

            <h2 className="text-3xl font-black">
              <span className="text-red-600">SHRI</span>
              <br />
              RAMANACHALA
            </h2>

            <p className="tracking-[4px] text-gray-300 mt-2 text-sm">
              TRANSPORTS
            </p>

            <p className="text-gray-400 leading-8 mt-6">
              Reliable transport solutions for Containers,
              Heavy Machinery, Industrial Equipment,
              ODC Cargo and Mixed Cargo across
              South India.
            </p>

            <a
              href="https://wa.me/919442268229"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-xl font-semibold"
            >
              WhatsApp Us
              <ArrowUpRight size={18} />
            </a>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-red-500">
              Services
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>Container Transportation</li>
              <li>Heavy Machinery Transport</li>
              <li>Industrial Equipment</li>
              <li>ODC Transportation</li>
              <li>Mixed Cargo</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-red-500">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <Phone className="text-red-500 shrink-0" size={18} />
                <span className="text-gray-300">
                  +91 94422 68229
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="text-red-500 shrink-0" size={18} />
                <span className="text-gray-300">
                  +91 76670 72966
                </span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-red-500 shrink-0" size={18} />
                <span className="break-all text-gray-300">
                  shriramanachalatransports@gmail.com
                </span>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-red-500 shrink-0" size={18} />
                <span className="text-gray-300">
                  137D/825, Karikalan Complex,
                  <br />
                  Salem Road,
                  <br />
                  Namakkal - 637001
                </span>
              </div>

            </div>

          </div>

          {/* Coverage */}
          <div>

            <h3 className="text-xl font-bold mb-6 text-red-500">
              Service Area
            </h3>

            <div className="space-y-4 text-gray-300">

              <div className="flex items-center gap-3">
                <Truck className="text-red-500" size={18} />
                Tamil Nadu
              </div>

              <div className="flex items-center gap-3">
                <Truck className="text-red-500" size={18} />
                Kerala
              </div>

              <div className="flex items-center gap-3">
                <Truck className="text-red-500" size={18} />
                Andhra Pradesh
              </div>

              <div className="flex items-center gap-3">
                <Truck className="text-red-500" size={18} />
                Karnataka
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-center">
            © 2026 Shri Ramanachala Transports. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm text-center">
            Built with Next.js • Designed for Reliable Logistics
          </p>

        </div>

      </div>

    </footer>
  );
}