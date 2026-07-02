export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-32"
    >
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <p className="text-red-600 font-semibold uppercase tracking-widest">
            About Us
          </p>

          <div className="w-20 h-1 bg-red-600 mt-3 rounded-full"></div>

          <h2 className="text-5xl font-bold text-gray-900 mt-6 leading-tight">
            Trusted Transport
            <br />
            Partner Since Day One
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-9 max-w-lg">
            Shri Ramanachala Transports provides reliable transportation
            solutions for containers, heavy machinery, industrial equipment
            and mixed cargo across South India.
          </p>

          <p className="mt-6 text-lg text-gray-600 leading-9 max-w-lg">
            Our commitment to safety, punctual deliveries and professional
            fleet management has earned the trust of customers across
            Tamil Nadu, Kerala and Andhra Pradesh.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-white border shadow-lg rounded-2xl p-6">
              <h3 className="text-4xl font-bold text-red-600">
                10+
              </h3>

              <p className="mt-2 text-gray-600">
                Years Experience
              </p>
            </div>

            <div className="bg-white border shadow-lg rounded-2xl p-6">
              <h3 className="text-4xl font-bold text-red-600">
                500+
              </h3>

              <p className="mt-2 text-gray-600">
                Successful Deliveries
              </p>
            </div>

          </div>
        </div>

        {/* Right */}
        <div className="bg-gradient-to-br from-[#0B2447] to-[#123B73] rounded-3xl p-10 text-white shadow-2xl">

          <h3 className="text-3xl font-bold">
            Why Customers Trust Us
          </h3>

          <div className="mt-8 space-y-6">

            <div>
              <h4 className="font-semibold text-xl">
                ✔ Safe Transportation
              </h4>
              <p className="text-gray-300 mt-2">
                Every shipment is handled with care and responsibility.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-xl">
                ✔ On-Time Delivery
              </h4>
              <p className="text-gray-300 mt-2">
                We value your time and deliver as promised.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-xl">
                ✔ Experienced Drivers
              </h4>
              <p className="text-gray-300 mt-2">
                Skilled professionals ensuring smooth transportation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-xl">
                ✔ 24/7 Customer Support
              </h4>
              <p className="text-gray-300 mt-2">
                Always available to assist with your transportation needs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}