export default function MapSection() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-12">
          <p className="text-red-600 uppercase tracking-widest font-semibold">
            Our Location
          </p>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-3"></div>

          <h2 className="text-5xl font-bold text-gray-900 mt-6">
            Visit Our Office
          </h2>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px]">
          <iframe
            src="https://www.google.com/maps?q=Karikalan+Complex+Salem+Road+Namakkal&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}