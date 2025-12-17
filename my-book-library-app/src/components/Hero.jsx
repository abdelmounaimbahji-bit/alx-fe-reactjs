export default function Hero() {
  const handleViewBook = () => alert("📖 the book page");

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center text-white font-poppins"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

      {/* content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center text-left px-6 md:px-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">The Silent Stars</h2>
        <p className="text-xl md:text-2xl font-light mb-2">by Elara Vance</p>
        <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl ">
          cosmic mystery across distant galaxies
        </p>
        <button
          onClick={handleViewBook}
          className="bg-white text-black px-8 py-3 rounded-md text-base font-semibold hover:bg-gray-200 transition"
        >
          View Book
        </button>
      </div>
    </section>
  );
}