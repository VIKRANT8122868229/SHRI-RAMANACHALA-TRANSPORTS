import {
  Truck,
  Container,
  PackageCheck,
  Factory,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Container size={40} className="text-red-600" />,
      title: "Container Transport",
      description:
        "Safe and timely transportation of containers across Tamil Nadu, Kerala and Andhra Pradesh.",
    },
    {
      icon: <Truck size={40} className="text-red-600" />,
      title: "Heavy Machinery",
      description:
        "Professional transportation for construction equipment and heavy industrial machinery.",
    },
    {
      icon: <Factory size={40} className="text-red-600" />,
      title: "Industrial Equipment",
      description:
        "Reliable logistics solutions for factories, plants and industrial projects.",
    },
    {
      icon: <PackageCheck size={40} className="text-red-600" />,
      title: "Mixed Cargo",
      description:
        "Efficient transport services for commercial goods and mixed cargo with maximum safety.",
    },
  ];

  return (
    <section id="services" className="bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-red-600 font-semibold uppercase tracking-widest">
            Our Services
          </p>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-3"></div>

          <h2 className="text-5xl font-bold text-gray-900 mt-6">
            Transportation Solutions
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
            We provide dependable logistics services with a strong focus on
            safety, punctuality and customer satisfaction.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg border p-8 hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              {service.icon}

              <h3 className="text-2xl font-bold mt-6">
                {service.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
                {service.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}