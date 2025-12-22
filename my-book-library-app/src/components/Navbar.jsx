import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsOpen(false); // for mobile menu
    }
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white text-black px-6 md:px-12 py-4 font-poppins sticky top-0 z-50 shadow-sm">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          BOOKWORM
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <div className="flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search books"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="px-3 py-1 rounded-md border border-gray-300 text-gray-900 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-sm">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <input
            type="text"
            placeholder="Search books"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="px-3 py-2 rounded-md border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </nav>
      )}
    </header>
  );
}
