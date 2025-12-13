export default function Hero() {
  const handleViewBook = () => alert("📖 !");

  return (
    <section
      className="relative h-[70vh] md:h-[80vh] flex items-center justify-center text-center text-white px-6 font-poppins"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1470&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>

      {/*  */}
      <div className="relative z-10 max-w-4xl px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          The Silent Stars
        </h2>
        <p className="text-lg md:text-xl font-light mb-2">by Elara Vance</p>
        <p className="text-sm md:text-base mb-8 opacity-90 max-w-2xl mx-auto">
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