import { ShieldCheck, Clock3, Truck, Headset } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Truck size={40} className="text-red-600" />,
      title: "Reliable Fleet",
      description: "Well-maintained vehicles for safe transportation.",
    },
    {
      icon: <Clock3 size={40} className="text-red-600" />,
      title: "On-Time Delivery",
      description: "We value your time and ensure timely deliveries.",
    },
    {
      icon: <ShieldCheck size={40} className="text-red-600" />,
      title: "Safe Cargo",
      description: "Professional handling of containers and machinery.",
    },
    {
      icon: <Headset size={40} className="text-red-600" />,
      title: "Customer Support",
      description: "Always available to assist our customers.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center text-[#0B2447]">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((item) => (
            <div
              key={item.title}
              className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}