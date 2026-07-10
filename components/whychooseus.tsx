import {
  ShieldCheck,
  Clock3,
  MapPinned,
  Users,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck size={42} className="text-red-600" />,
      title: "Safe Transportation",
      description:
        "Every shipment is handled carefully with maximum safety standards.",
    },
    {
      icon: <Clock3 size={42} className="text-red-600" />,
      title: "On-Time Delivery",
      description:
        "We understand deadlines and ensure timely transportation every time.",
    },
    {
      icon: <MapPinned size={42} className="text-red-600" />,
      title: "Wide Coverage",
      description:
        "Serving customers across Tamil Nadu, Kerala, Karnataka and Andhra Pradesh.",
    },
    {
      icon: <Users size={42} className="text-red-600" />,
      title: "20+ Years Experience",
      description:
        "More than two decades of trusted transportation experience with skilled drivers and logistics professionals.",
    },
  ];

  return (
    <section
      id="whychoose"
      className="bg-[#0B2447] py-32 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="text-red-500 uppercase tracking-[4px] font-semibold">
            Why Choose Us
          </p>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-3"></div>

          <h2 className="text-4xl md:text-5xl font-black mt-6">
            Delivering Trust, Every Mile
          </h2>

          <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-8">
            With over 20 years of experience, we provide reliable transportation
            solutions for containers, heavy machinery, industrial equipment,
            ODC cargo and mixed cargo across South India.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-[#07182f] rounded-3xl p-8 shadow-xl hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              {feature.icon}

              <h3 className="text-2xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-4 leading-8">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}