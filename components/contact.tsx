"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    if (!name || !phone || !message) {
      alert("Please fill all the fields.");
      return;
    }

    const text = `Hello SHRI RAMANACHALA TRANSPORTS,

Name: ${name}
Phone: ${phone}

Requirement:
${message}`;

    window.open(
      `https://wa.me/919442268229?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-red-600 uppercase tracking-[4px] font-semibold">
            Contact Us
          </span>

          <h2 className="text-5xl font-black mt-5 text-[#07182f]">
            Get In Touch
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Need reliable transportation for containers,
            industrial equipment or heavy machinery?
            Contact us today.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* Left */}

          <div className="space-y-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 flex gap-5">

              <Phone
                size={30}
                className="text-red-600 mt-1"
              />

              <div>

                <h3 className="text-2xl font-bold text-[#07182f]">
                  Phone
                </h3>

                <p className="text-gray-700 mt-3">
                  +91 94422 68229
                </p>

                <p className="text-gray-700">
                  +91 76670 72966
                </p>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 flex gap-5">

              <Mail
                size={30}
                className="text-red-600 mt-1"
              />

              <div>

                <h3 className="text-2xl font-bold text-[#07182f]">
                  Email
                </h3>

                <p className="text-gray-700 mt-3 break-all">
                  shriramanachalatransports@gmail.com
                </p>

              </div>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 flex gap-5">

              <MapPin
                size={30}
                className="text-red-600 mt-1"
              />

              <div>

                <h3 className="text-2xl font-bold text-[#07182f]">
                  Office
                </h3>

                <p className="text-gray-700 mt-3 leading-7">
                  137D/825,
                  Karikalan Complex,
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

            <div className="space-y-5 mt-8">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              <textarea
                rows={6}
                placeholder="Tell us about your transportation requirement..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
                            <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 transition rounded-xl py-4 text-white flex justify-center items-center gap-2 font-semibold"
              >
                <MessageCircle size={20} />
                Send via WhatsApp
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}