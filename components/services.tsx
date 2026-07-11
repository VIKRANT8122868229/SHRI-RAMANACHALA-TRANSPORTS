"use client";

import Reveal from "./Reveal";
import Link from "next/link";
import {
  Truck,
  Container,
  PackageCheck,
  Factory,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Container,
    title: "Container Transportation",
    description:
      "Secure and timely movement of containers across Tamil Nadu, Kerala and Andhra Pradesh with complete cargo safety.",
  },
  {
    icon: Truck,
    title: "Heavy Machinery",
    description:
      "Specialized transportation for construction equipment, cranes, earth movers and industrial machinery.",
  },
  {
    icon: Factory,
    title: "Industrial Equipment",
    description:
      "Professional logistics solutions for manufacturing plants, factories and industrial projects.",
  },
  {
    icon: PackageCheck,
    title: "ODC & Mixed Cargo",
    description:
      "Reliable transportation of Over Dimensional Cargo and commercial goods with proper planning and execution.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f8fafc] py-28"
    >
      {/* Background Glow */}
      <div className="absolute -top-20 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-flex bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold tracking-wide">
              OUR SERVICES
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-black text-[#07182f]">
              Complete Logistics
              <span className="text-red-600"> Solutions</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              From containers and industrial equipment to ODC cargo,
              we provide safe, reliable and on-time transportation
              services tailored to your business needs.
            </p>

          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={index}
                delay={index * 0.15}
                direction="up"
              >
                <div className="group h-full rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">

                  <div className="h-2 bg-gradient-to-r from-red-600 to-red-400"></div>

                  <div className="p-8 flex flex-col h-full">

                    <div className="w-16 h-16 rounded-2xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition duration-300">

                      <Icon
                        size={34}
                        className="text-red-600 group-hover:text-white transition duration-300"
                      />

                    </div>

                    <h3 className="mt-7 text-2xl font-bold text-[#07182f]">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-gray-600 leading-8 flex-grow">
                      {service.description}
                    </p>

                    <Link
                      href="#contact"
                      className="mt-8 inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-all group/link"
                    >
                      Learn More

                      <ArrowRight
                        size={18}
                        className="ml-2 transition-transform duration-300 group-hover/link:translate-x-2"
                      />
                    </Link>

                  </div>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}