import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="text-red-600 uppercase tracking-[4px] font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-black mt-5 text-[#07182f]">
            Get In Touch
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Need reliable transportation for containers, industrial equipment or
            heavy machinery? Contact us today.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}
          <div className="space-y-8">

            {/* Phone */}
            <div className="flex gap-5 items-start bg-white rounded-2xl p-6 shadow">

              <Phone className="text-red-600 mt-1" size={28} />

              <div>

                <h3 className="font-bold text-2xl text-[#07182f]">
                  Phone
                </h3>

                <p className="mt-2 text-gray-700">
                  +91 94422 68229
                </p>

                <p className="text-gray-700">
                  +91 76670 72966
                </p>

              </div>

            </div>

            {/* Email */}
            <div className="flex gap-5 items-start bg-white rounded-2xl p-6 shadow">

              <Mail className="text-red-600 mt-1" size={28} />

              <div>

                <h3 className="font-bold text-2xl text-[#07182f]">
                  Email
                </h3>

                <p className="mt-2 break-all text-gray-700">
                  shriramanachalatransports@gmail.com
                </p>

              </div>

            </div>

            {/* Office */}
            <div className="flex gap-5 items-start bg-white rounded-2xl p-6 shadow">

              <MapPin className="text-red-600 mt-1" size={28} />

              <div>

                <h3 className="font-bold text-2xl text-[#07182f]">
                  Office
                </h3>

                <p className="mt-2 text-gray-700">
                  137D/825, Karikalan Complex,
                  <br />
                  Salem Road,
                  <br />
                  Namakkal – 637001
                </p>

              </div>

            </div>

          </div>

          {/* Right */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-bold text-[#07182f]">
              Quick Inquiry
            </h3>

            <form className="space-y-5 mt-8">

              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Your Name"
              />

              <input
                type="tel"
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Phone Number"
              />

              <textarea
                rows={6}
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Tell us about your transportation requirement..."
              />

              <a
                href="https://wa.me/919442268229"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 transition rounded-xl py-4 text-white flex justify-center items-center gap-2 font-semibold"
              >
                <MessageCircle size={20} />
                Send via WhatsApp
              </a>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}