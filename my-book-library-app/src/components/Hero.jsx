export default function Hero() {
  const handleViewBook = () => alert("📖 pages !");

  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1470&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-3xl">
        <h2 className="text-5xl font-bold mb-6">The Silent Stars by Elara Vance</h2>
        <p className="text-lg mb-8">
          A gripping space opera that explores the boundaries of human endurance and cosmic mystery across distant galaxies.
        </p>
        <button
          onClick={handleViewBook}
          className="bg-blue-700 hover:bg-blue-800 px-8 py-3 rounded-md text-base transition"
        >
          View Book
        </button>
      </div>
    </section>
  );
}