export default function SearchSection() {
  return (
    <section className="bg-[#0b0b22] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-6">Find Your Next Great Read</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="Search by title, author, or keyword..."
            className="w-full sm:w-96 px-4 py-3 rounded-md text-gray-900"
          />
          <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-md transition">
            Search
          </button>
        </div>
        <p className="mt-5 text-sm opacity-80">Explore millions of books from various genres.</p>
      </div>
    </section>
  );
}