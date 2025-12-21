import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getBooksByCategory } from "../services/openLibrary";

const categories = [
  { name: "Fantasy", key: "fantasy", color: "bg-purple-500" },
  { name: "Science Fiction", key: "science_fiction", color: "bg-blue-500" },
  { name: "Mystery & Thriller", key: "mystery", color: "bg-gray-700" },
  { name: "Biography", key: "biography", color: "bg-green-600" },
  { name: "History", key: "history", color: "bg-yellow-600" },
  { name: "Self-Help", key: "self_help", color: "bg-pink-500" },
  { name: "Romance", key: "romance", color: "bg-red-500" },
  { name: "Non-Fiction", key: "non-fiction", color: "bg-indigo-500" },
];

export default function Categories() {
  const [booksByCategory, setBooksByCategory] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all(
      categories.map(async (cat) => {
        const books = await getBooksByCategory(cat.key, 6);
        return { [cat.name]: books };
      })
    ).then((results) => {
      setBooksByCategory(Object.assign({}, ...results));
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-poppins">
        <p className="text-gray-600">Loading categories...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-white py-10 px-6 font-poppins">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-10">
        <Link
          to="/"
          className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold transition"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Explore Categories
        </h2>
      </div>

      
      <div className="max-w-7xl mx-auto space-y-12">
        {categories.map((cat) => {
          const books = booksByCategory[cat.name] || [];
          return (
            <div key={cat.name}>
              
              <h3 className={`text-2xl font-semibold text-white mb-6 px-4 py-2 rounded-lg inline-block ${cat.color}`}>
                {cat.name}
              </h3>

              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {books.map((book) => (
                  <Link to={`/book/${book.key}`}
                    key={book.key}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    <img
                      src={book.cover}
                      alt={book.title}
                      className="w-full h-56 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h4 className="text-sm font-semibold text-black mb-2 line-clamp-2">
                        {book.title}
                      </h4>
                      <p className="text-xs text-gray-600">{book.author}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}