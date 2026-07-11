"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock3,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    if (!name || !phone || !message) {
      alert("Please fill in all the fields.");
      return;
    }

    const text = `Hello SHRI RAMANACHALA TRANSPORTS,

Name: ${name}
Phone: ${phone}

Transportation Requirement:
${message}`;

    window.open(
      `https://wa.me/919442268229?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f8fafc] py-28"
    >
      <div className="absolute -top-32 left-0 w-96 h-96 rounded-full bg-red-500/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">
              CONTACT US
            </span>

            <h2 className="mt-6 text-5xl font-black text-[#07182f]">
              Let's Move Your
              <span className="text-red-600"> Cargo</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Need safe and reliable transportation? Contact us today for
              containers, heavy machinery, industrial equipment and ODC cargo.
            </p>

          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* Left */}

          <Reveal direction="left">

            <div className="space-y-6">

              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  text: "+91 94422 68229\n+91 76670 72966",
                },
                {
                  icon: Mail,
                  title: "Email",
                  text: "shriramanachalatransports@gmail.com",
                },
                {
                  icon: MapPin,
                  title: "Office",
                  text:
                    "137D/825, Karikalan Complex,\nSalem Road,\nNamakkal - 637001",
                },
                {
                  icon: Clock3,
                  title: "Working Hours",
                  text: "Monday - Saturday\n8:00 AM - 8:00 PM",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-5 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-7"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center shrink-0">
                      <Icon className="text-white" size={30} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-[#07182f]">
                        {item.title}
                      </h3>

                      <p className="mt-3 whitespace-pre-line text-gray-600 leading-8">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

          </Reveal>

          {/* Right */}

          <Reveal direction="right">

            <div className="rounded-[35px] bg-white shadow-2xl p-10">

              <h3 className="text-3xl font-black text-[#07182f]">
                Quick Inquiry
              </h3>

              <p className="text-gray-500 mt-2">
                Fill out the details below and we'll connect with you on WhatsApp.
              </p>

              <div className="space-y-6 mt-8">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-red-600 transition"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-red-600 transition"
                />

                <textarea
                  rows={6}
                  placeholder="Describe your transportation requirement..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-2xl border border-gray-300 p-4 outline-none focus:border-red-600 transition resize-none"
                />

                <button
                  onClick={handleWhatsApp}
                  className="w-full rounded-2xl bg-green-600 hover:bg-green-700 hover:scale-[1.02] transition-all duration-300 text-white font-semibold py-4 flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageCircle size={22} />
                  Send via WhatsApp
                </button>

              </div>

            </div>

          </Reveal>

        </div>

      </div>
    </section>
  );
}
