import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsOpen(false);
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
    <header
      className={`w-full text-black px-6 md:px-12 py-4 font-poppins sticky top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-white shadow-md" : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-blue-700 transition-colors"
        >
          BOOKWORM
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <div className="flex items-center gap-6">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    isActive
                      ? "text-blue-700 border-b-2 border-blue-700 pb-1"
                      : "hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Search input with icon */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search books"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="pl-10 pr-3 py-1 rounded-md border border-gray-300 text-gray-900 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black p-2 rounded-md hover:bg-gray-200 transition transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-sm bg-white p-4 rounded-md shadow-md">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-blue-700 border-l-4 border-blue-700 pl-2"
                    : "hover:text-blue-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="relative mt-2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search books"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="pl-10 pr-3 py-2 rounded-md border border-gray-300 text-gray-900 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>
        </nav>
      )}
    </header>
  );
}
