import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Categories", "New Arrivals", "About Us", "Contact"];

  return (
    <header className="w-full bg-white  text-black px-6 md:px-12 py-4 font-poppins sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">BOOKWORM</h1>
        <div className="hidden md:flex items-center gap-10 text-sm">
          <div className="flex items-center gap-6">
            {links.map((link) => (
              <a key={link} href="#" className="hover:text-blue-600 transition-colors">
                {link}
              </a>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search books"
            className="px-3 py-1 rounded-md border border-gray-300 text-gray-900 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-sm">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-blue-600">
              {link}
            </a>
          ))}
          <input
            type="text"
            placeholder="Search books"
            className="px-3 py-2 rounded-md border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </nav>
      )}
    </header>
  );
}