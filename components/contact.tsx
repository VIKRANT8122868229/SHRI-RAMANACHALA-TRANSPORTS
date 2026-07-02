export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0B2447] text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center">
          Contact Us
        </h2>

        <p className="text-center text-gray-300 mt-4 mb-16">
          Get in touch with us for transportation and logistics solutions.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Details */}
          <div className="space-y-6">

            <div>
              <h3 className="text-2xl font-semibold text-red-500">
                SHRI RAMANACHALA TRANSPORTS
              </h3>
            </div>

            <div>
              <strong>Owner</strong>
              <p>K. Senthil Kumar</p>
            </div>

            <div>
              <strong>Phone</strong>
              <p>+91 94422 68229</p>
              <p>+91 76670 72966</p>
            </div>

            <div>
              <strong>Email</strong>
              <p>shriramanachalatransports@gmail.com</p>
            </div>

            <div>
              <strong>Address</strong>
              <p>
                137D/825, Karikalan Complex,<br />
                Salem Road,<br />
                Namakkal - 637001
              </p>
            </div>

            <div>
              <strong>Service Area</strong>
              <p>Tamil Nadu • Kerala • Andhra Pradesh</p>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 text-black">

            <h3 className="text-3xl font-bold mb-6">
              Request a Quote
            </h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                rows={5}
                placeholder="Describe your transportation requirement"
                className="w-full border rounded-lg p-3"
              ></textarea>

              <button
                className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}