export default function Navbar() {
  return (
    <header className="w-full bg-[#0B0B22] text-white px-6 md:px-12 py-4 flex items-center justify-between font-poppins">
      <h1 className="text-2xl font-bold tracking-wide">Book Library</h1>
      <nav className="hidden md:flex gap-8 text-sm">
        {["Home", "Categories", "New Arrivals", "About Us", "Contact"].map((link) => (
          <a key={link} href="#" className="hover:text-blue-300 transition-colors">
            {link}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search books"
          className="hidden md:block px-3 py-1 rounded-md text-gray-900 text-sm w-48"
        />
        <button className="md:hidden text-white">☰</button>
      </div>
    </header>
  );
}