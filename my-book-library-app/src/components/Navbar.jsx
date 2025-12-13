export default function Navbar() {
  return (
    <header className="w-full bg-[#121240] text-white px-12 py-5 flex items-center justify-between">
      <h1 className="text-2xl font-semibold tracking-wide">BOOKWORM-APP</h1>
      <nav className="hidden md:flex gap-8 text-sm">
        {["Home", "Categories", "New Arrivals", "About Us", "Contact"].map((link) => (
          <a key={link} href="#" className="hover:text-blue-300 transition-colors">
            {link}
          </a>
        ))}
      </nav>
      <button className="md:hidden text-white">☰</button>
    </header>
  );
}