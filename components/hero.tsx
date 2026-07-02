import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0B2447] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-8 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>
          <p className="text-red-500 font-semibold text-lg mb-4">
            Fleet Owners & ODC Transporters
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            SHRI
            <br />
            RAMANACHALA
            <br />
            TRANSPORTS
          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-9 max-w-xl">
            Reliable transportation solutions for Containers, Heavy Machinery,
            Industrial Equipment and Mixed Cargo across Tamil Nadu, Kerala and
            Andhra Pradesh.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-white font-semibold transition duration-300 shadow-lg hover:scale-105">
              Call Now
            </button>

            <button className="border border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition duration-300 hover:scale-105">
              Get Quote
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/images/hero/truck.jpg"
            alt="Truck"
            width={700}
            height={550}
            priority
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}