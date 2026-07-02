export default function Footer() {
  return (
    <footer className="bg-[#07182F] text-white">
      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black text-red-600">
              SHRI RAMANACHALA
            </h2>

            <p className="text-xl font-semibold mt-2">
              TRANSPORTS
            </p>

            <p className="text-gray-400 mt-6 leading-8">
              Reliable transportation solutions for Containers,
              Heavy Machinery, Industrial Equipment and Mixed Cargo
              across Tamil Nadu, Kerala and Andhra Pradesh.
            </p>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-2xl font-bold mb-6">
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

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <p className="text-gray-300">
              📞 +91 94422 68229
            </p>

            <p className="text-gray-300 mt-3">
              📞 +91 76670 72966
            </p>

            <p className="text-gray-300 mt-3">
              ✉ shriramanachalatransports@gmail.com
            </p>

            <p className="text-gray-300 mt-3 leading-7">
              137D/825, Karikalan Complex,
              <br />
              Salem Road,
              <br />
              Namakkal – 637001
            </p>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">

          © 2026 SHRI RAMANACHALA TRANSPORTS.
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}