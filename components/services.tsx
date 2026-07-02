export default function Services() {
  const services = [
    {
      title: "Container Transportation",
      description:
        "Safe and reliable transportation of containers across South India.",
      icon: "🚛",
    },
    {
      title: "Heavy Machinery",
      description:
        "Specialized transport solutions for heavy industrial machinery.",
      icon: "🏗️",
    },
    {
      title: "Industrial Equipment",
      description:
        "Secure logistics for industrial equipment and commercial cargo.",
      icon: "⚙️",
    },
    {
      title: "ODC Transportation",
      description:
        "Expert handling of Over Dimensional Cargo with proper planning.",
      icon: "📦",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center text-[#0B2447]">
          Our Services
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Professional transportation solutions tailored for industrial and commercial clients.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl shadow-lg p-8 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-6">{service.icon}</div>

              <h3 className="text-2xl font-bold text-[#0B2447] mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}