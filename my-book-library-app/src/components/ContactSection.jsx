import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen min-w-screen w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 px-6 font-poppins">
      {/* Contact Form */}
      <div className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-10 text-center">
          Contact Us
        </h2>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-md font-semibold shadow-md transition transform hover:-translate-y-0.5"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
