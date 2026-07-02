export default function Stats() {
  const stats = [
    {
      number: "10+",
      title: "Years Experience",
    },
    {
      number: "500+",
      title: "Successful Deliveries",
    },
    {
      number: "3",
      title: "States Covered",
    },
    {
      number: "24/7",
      title: "Customer Support",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#0B2447] to-[#123B73] py-24">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-red-500 uppercase tracking-widest font-semibold">
            Company Statistics
          </p>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-3"></div>

          <h2 className="text-5xl font-bold text-white mt-6">
            Our Journey in Numbers
          </h2>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-xl hover:scale-105 transition duration-300"
            >
              <h3 className="text-5xl font-bold text-red-600">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-700 text-lg font-medium">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}