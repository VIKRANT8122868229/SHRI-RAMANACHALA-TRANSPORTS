"use client";

import { useEffect, useState } from "react";
import { Truck, Users, Award, Headphones } from "lucide-react";

function Counter({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 1800;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: <Award size={40} className="text-red-600" />,
      number: 20,
      suffix: "+",
      title: "Years Experience",
    },
    {
      icon: <Truck size={40} className="text-red-600" />,
      number: 5000,
      suffix: "+",
      title: "Successful Deliveries",
    },
    {
      icon: <Users size={40} className="text-red-600" />,
      number: 250,
      suffix: "+",
      title: "Happy Clients",
    },
    {
      icon: <Headphones size={40} className="text-red-600" />,
      number: 24,
      suffix: "/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="bg-[#07182f] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="text-red-500 uppercase tracking-[5px] font-semibold">
            Our Achievements
          </p>

          <h2 className="text-5xl font-bold text-white mt-5">
            Numbers That Speak
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-10 text-center shadow-xl hover:-translate-y-3 transition-all duration-300"
            >
              <div className="flex justify-center">
                {item.icon}
              </div>

              <h3 className="text-5xl font-black text-[#07182f] mt-6">
                <Counter end={item.number} suffix={item.suffix} />
              </h3>

              <p className="mt-4 text-gray-600 font-semibold">
                {item.title}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}