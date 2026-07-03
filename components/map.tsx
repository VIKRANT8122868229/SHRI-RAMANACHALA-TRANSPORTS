export default function MapSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="text-red-600 uppercase tracking-[4px] font-semibold">
            Find Us
          </span>

          <h2 className="text-5xl font-black mt-5">
            Visit Our Office
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            SHRI RAMANACHALA TRANSPORTS
          </p>

        </div>

        <div className="mt-14 rounded-3xl overflow-hidden shadow-2xl">

          <iframe
            src="https://www.google.com/maps?q=Karikalan+Complex+Salem+Road+Namakkal&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>

        </div>

      </div>
    </section>
  );
}