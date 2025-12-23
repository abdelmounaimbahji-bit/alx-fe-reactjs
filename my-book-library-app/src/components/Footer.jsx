import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-6xl mx-auto py-10 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Brand */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold">BookWorm</h3>
          <p className="text-gray-400 text-sm mt-1">Discover, Read & Share Books</p>
        </div>

        {/* Center: Links */}
        <div className="flex gap-6 mb-6 md:mb-0">
          <a href="#!" className="text-gray-400 hover:text-white transition">Home</a>
          <a href="#!" className="text-gray-400 hover:text-white transition">Categories</a>
          <a href="#!" className="text-gray-400 hover:text-white transition">New Arrivals</a>
          <a href="#!" className="text-gray-400 hover:text-white transition">About</a>
          <a href="#!" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-4">
          <a href="#!" className="text-gray-400 hover:text-blue-500 transition"><FaFacebookF /></a>
          <a href="#!" className="text-gray-400 hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="#!" className="text-gray-400 hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="#!" className="text-gray-400 hover:text-blue-700 transition"><FaLinkedin /></a>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} BookWorm. All rights reserved.
      </div>
    </footer>
  );
}
