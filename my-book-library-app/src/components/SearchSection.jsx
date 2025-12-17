import { FaSearch } from "react-icons/fa";

export default function SearchSection() {
  return (
    <section className="bg-[#0B0B22] text-white py-20 px-6 font-poppins">
      <div className="max-w-3xl lg:max-w-4xl mx-auto text-left">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6">
          Find Your Next Great Read
        </h3>

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <div className="relative w-full sm:w-[400px]">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Search by title, author, or keyword..."
              className="w-full pl-10 pr-4 py-3 rounded-md text-gray-900 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button className="bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-md font-semibold transition">
            Search
          </button>
        </div>

        <p className="mt-6 text-sm opacity-80">
          Explore millions of books from various genres.
        </p>
      </div>
    </section>
  );
}