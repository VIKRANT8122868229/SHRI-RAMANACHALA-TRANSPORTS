"use client";

import Reveal from "./Reveal";
import {
  ShieldCheck,
  Clock3,
  MapPinned,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Safe Transportation",
    description:
      "Every shipment is handled with strict safety standards and professional care from pickup to delivery.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    description:
      "Our experienced logistics team ensures every shipment reaches its destination without delays.",
  },
  {
    icon: MapPinned,
    title: "South India Coverage",
    description:
      "Serving businesses across Tamil Nadu, Kerala, Karnataka and Andhra Pradesh with dependable transport solutions.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "Backed by skilled drivers and transport professionals committed to delivering excellence.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="whychooseus"
      className="relative overflow-hidden bg-gradient-to-br from-[#07182f] via-[#0B2447] to-[#123B73] py-28 text-white"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <Reveal>
          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex bg-red-600 text-white px-5 py-2 rounded-full font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-black">
              Delivering
              <span className="text-red-500"> Trust </span>
              Every Mile
            </h2>

            <p className="mt-6 text-gray-300 text-lg leading-8">
              We combine years of transport expertise with modern logistics
              planning to ensure safe, reliable and timely deliveries across
              South India.
            </p>

          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal
                key={index}
                delay={index * 0.15}
              >
                <div className="group h-full rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 hover:bg-white hover:text-[#07182f] transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

                  <div className="w-16 h-16 rounded-2xl bg-red-600 flex items-center justify-center">

                    <Icon
                      size={34}
                      className="text-white"
                    />

                  </div>

                  <h3 className="mt-7 text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-5 leading-8 text-gray-300 group-hover:text-gray-600 transition">
                    {feature.description}
                  </p>

                  <div className="mt-8 flex items-center font-semibold text-red-500 group-hover:translate-x-2 transition">

                    Learn More

                    <ArrowRight
                      size={18}
                      className="ml-2"
                    />

                  </div>

                </div>
              </Reveal>
            );
          })}

        </div>

        {/* Bottom Stats */}

        <Reveal delay={0.5}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-24">

            <div className="text-center">
              <h3 className="text-5xl font-black text-red-500">20+</h3>
              <p className="mt-2 text-gray-300">Years Experience</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-black text-red-500">5000+</h3>
              <p className="mt-2 text-gray-300">Deliveries</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-black text-red-500">4</h3>
              <p className="mt-2 text-gray-300">States Covered</p>
            </div>

            <div className="text-center">
              <h3 className="text-5xl font-black text-red-500">100%</h3>
              <p className="mt-2 text-gray-300">Customer Focus</p>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}