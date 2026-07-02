export default function Stats() {
  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "500+", label: "Successful Trips" },
    { number: "3", label: "States Covered" },
    { number: "24/7", label: "Customer Support" },
  ];

  return (
    <section className="bg-[#0B2447] text-white py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-5xl font-bold text-red-500">
                {stat.number}
              </h2>
              <p className="mt-3 text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}