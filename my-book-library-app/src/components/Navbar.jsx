import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaSearch, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Apply dark mode class to html
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) html.classList.add("dark");
    else html.classList.remove("dark");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  // Handle search
  const handleSearch = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      setLoading(true);
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setIsOpen(false);
      setLoading(false);
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
      className={`w-full px-6 md:px-12 py-4 font-poppins sticky top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-white dark:bg-gray-900 shadow-md"
          : "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
        >
          BOOKWORM
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400 pb-1"
                    : "hover:text-blue-600 dark:hover:text-blue-300"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Search */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              placeholder={loading ? "Searching..." : "Search books"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              disabled={loading}
              className={`pl-10 pr-3 py-1 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                loading ? "bg-gray-100 dark:bg-gray-700 cursor-not-allowed" : ""
              }`}
            />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black dark:text-white p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-4 text-sm bg-white dark:bg-gray-900 p-4 rounded-md shadow-md">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`font-medium transition-colors ${
                  isActive
                    ? "text-blue-700 dark:text-blue-400 border-l-4 border-blue-700 dark:border-blue-400 pl-2"
                    : "hover:text-blue-600 dark:hover:text-blue-300"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <div className="relative mt-2">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
            <input
              type="text"
              placeholder={loading ? "Searching..." : "Search books"}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              disabled={loading}
              className={`pl-10 pr-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
                loading ? "bg-gray-100 dark:bg-gray-700 cursor-not-allowed" : ""
              }`}
            />
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="mt-2 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition flex items-center justify-center"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      )}
    </header>
  );
}
