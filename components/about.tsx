"use client";

import Reveal from "./Reveal";
import {
  ShieldCheck,
  Clock3,
  Truck,
  Users,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-28"
    >
      <div className="absolute top-0 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <Reveal direction="left">
          <div>

            <span className="inline-flex items-center bg-red-100 text-red-600 font-semibold px-5 py-2 rounded-full tracking-wide">
              ABOUT SHRI RAMANACHALA TRANSPORTS
            </span>

            <h2 className="mt-7 text-4xl lg:text-5xl font-black text-[#07182f] leading-tight">
              Moving Industries
              <br />
              With Reliability &
              <span className="text-red-600"> Trust.</span>
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-9">
              Shri Ramanachala Transports is a trusted logistics company
              specializing in Container Transportation, Heavy Machinery,
              Industrial Equipment, ODC Cargo and Mixed Cargo across
              South India.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-9">
              Every shipment is handled with professionalism, punctuality
              and complete safety. Our experienced drivers and dedicated
              team ensure every delivery reaches its destination on time.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-12">

              <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-8 hover:-translate-y-2 transition duration-300">

                <h3 className="text-5xl font-black text-red-600">
                  20+
                </h3>

                <p className="mt-3 text-gray-600 font-medium">
                  Years of Experience
                </p>

              </div>

              <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-8 hover:-translate-y-2 transition duration-300">

                <h3 className="text-5xl font-black text-red-600">
                  5000+
                </h3>

                <p className="mt-3 text-gray-600 font-medium">
                  Successful Deliveries
                </p>

              </div>

            </div>

          </div>
        </Reveal>

        {/* RIGHT */}

        <Reveal direction="right">
          <div className="rounded-[35px] bg-gradient-to-br from-[#07182f] via-[#0B2447] to-[#123B73] p-10 text-white shadow-[0_30px_60px_rgba(0,0,0,.35)]">

            <h3 className="text-3xl font-black">
              Why Businesses Choose Us
            </h3>

            <p className="text-gray-300 mt-3 leading-8">
              We combine experience, modern logistics and customer-first
              service to deliver cargo safely across South India.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shrink-0">
                  <ShieldCheck size={28} />
                </div>

                <div>

                  <h4 className="text-xl font-bold">
                    Safe Transportation
                  </h4>

                  <p className="text-gray-300 mt-2">
                    Every shipment is protected with careful handling
                    and secure transportation practices.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shrink-0">
                  <Clock3 size={28} />
                </div>

                <div>

                  <h4 className="text-xl font-bold">
                    On-Time Delivery
                  </h4>

                  <p className="text-gray-300 mt-2">
                    Timely pickups and scheduled deliveries without delay.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shrink-0">
                  <Truck size={28} />
                </div>

                <div>

                  <h4 className="text-xl font-bold">
                    Modern Fleet
                  </h4>

                  <p className="text-gray-300 mt-2">
                    Reliable vehicles capable of transporting
                    containers, heavy machinery and ODC cargo.
                  </p>

                </div>

              </div>

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center shrink-0">
                  <Users size={28} />
                </div>

                <div>

                  <h4 className="text-xl font-bold">
                    Professional Team
                  </h4>

                  <p className="text-gray-300 mt-2">
                    Experienced drivers and logistics professionals
                    committed to excellent customer service.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}