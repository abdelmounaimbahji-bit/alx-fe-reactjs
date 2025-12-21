import { useEffect, useState } from "react";
import { getNewArrivals } from "../services/openLibrary";

export default function NewArrivals() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewArrivals(12).then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center py-10">Loading new arrivals...</p>;

  return (
    <div className="min-h-screen bg-white py-16 px-6 font-poppins">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-10 text-center">
        New Arrivals
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