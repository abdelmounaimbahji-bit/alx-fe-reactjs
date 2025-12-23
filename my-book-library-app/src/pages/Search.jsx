import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchBooks } from "../services/openLibrary";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;
    searchBooks(query, 20).then(setBooks).finally(() => setLoading(false));
  }, [query]);

  if (loading) return <p className="text-center py-10">Searching...</p>;

  return (
    <div className="min-h-screen min-w-screen bg-white py-16 px-6 font-poppins">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-10 text-center">
        Search Results for "{query}"
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div key={book.key} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-lg transition">
            <img src={book.cover} alt={book.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-lg font-semibold text-black">{book.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{book.author}</p>
            <button className="mt-3 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md text-sm transition">
              View Book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}