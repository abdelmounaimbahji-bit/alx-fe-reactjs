import { FaBook, FaUsers, FaLightbulb } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="min-h-screen min-w-screen w-full bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 px-6 font-poppins">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">
          About Us
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          BookWorm is your ultimate destination for discovering, reading, and sharing books.
          Whether you're into fantasy, sci-fi, mystery, or self-development, we've got you covered.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          Our mission is to make reading accessible, enjoyable, and social.
          Join thousands of readers around the world and find your next great read today.
        </p>

        {/* Features / Info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <FaBook className="text-blue-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Library</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A vast collection of books from all genres to satisfy your reading passion.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <FaUsers className="text-blue-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Connect with fellow readers, share reviews, and participate in discussions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <FaLightbulb className="text-blue-700 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Inspire reading habits, make books accessible, and foster a love for learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
