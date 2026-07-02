import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-32"
    >
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <p className="text-red-600 uppercase tracking-widest font-semibold">
            Contact Us
          </p>

          <div className="w-20 h-1 bg-red-600 rounded-full mx-auto mt-3"></div>

          <h2 className="text-5xl font-bold text-gray-900 mt-6">
            Let's Move Your Cargo
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Contact SHRI RAMANACHALA TRANSPORTS for reliable transportation
            services across Tamil Nadu, Kerala and Andhra Pradesh.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left Side */}

          <div className="space-y-8">

            <div className="flex gap-5">
              <Phone className="text-red-600" size={32} />
              <div>
                <h3 className="font-bold text-xl">Phone</h3>
                <p>+91 94422 68229</p>
                <p>+91 76670 72966</p>
              </div>
            </div>

            <div className="flex gap-5">
              <Mail className="text-red-600" size={32} />
              <div>
                <h3 className="font-bold text-xl">Email</h3>
                <p>shriramanachalatransports@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-5">
              <MapPin className="text-red-600" size={32} />
              <div>
                <h3 className="font-bold text-xl">Office</h3>
                <p>
                  137D/825, Karikalan Complex,
                  <br />
                  Salem Road,
                  <br />
                  Namakkal – 637001
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <Clock className="text-red-600" size={32} />
              <div>
                <h3 className="font-bold text-xl">Working Hours</h3>
                <p>Monday – Saturday</p>
                <p>8:00 AM – 8:00 PM</p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <div className="bg-gray-50 p-10 rounded-3xl shadow-xl">

            <h3 className="text-3xl font-bold mb-8">
              Request a Quote
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="Delivery Location"
                className="w-full border rounded-xl p-4"
              />

              <textarea
                rows={5}
                placeholder="Describe your cargo..."
                className="w-full border rounded-xl p-4"
              ></textarea>

              <button
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
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