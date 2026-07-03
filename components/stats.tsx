import { Truck, MapPinned, PackageCheck, Users } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Truck size={40} className="text-red-600" />,
      number: "10+",
      title: "Years Experience",
    },
    {
      icon: <MapPinned size={40} className="text-red-600" />,
      number: "3",
      title: "States Covered",
    },
    {
      icon: <PackageCheck size={40} className="text-red-600" />,
      number: "500+",
      title: "Successful Deliveries",
    },
    {
      icon: <Users size={40} className="text-red-600" />,
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section
      id="stats"
      className="py-24 bg-gradient-to-r from-[#07182f] to-[#123B73]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-xl hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="flex justify-center mb-5">
                {item.icon}
              </div>

              <h2 className="text-5xl font-black text-[#07182f]">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600 font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}