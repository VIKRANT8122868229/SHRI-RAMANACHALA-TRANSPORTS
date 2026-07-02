export default function Footer() {
  return (
    <footer className="bg-[#07182f] text-white py-12">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-red-500">
            SRT
          </h2>

          <p className="mt-4 text-gray-300">
            Reliable logistics solutions for Containers,
            Heavy Machinery and Industrial Equipment.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Fleet</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p>📞 +91 94422 68229</p>
          <p>📞 +91 76670 72966</p>
          <p>📍 Namakkal, Tamil Nadu</p>
          <p>✉ shriramanachalatransports@gmail.com</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
        © 2026 SHRI RAMANACHALA TRANSPORTS. All Rights Reserved.
      </div>
    </footer>
  );
}