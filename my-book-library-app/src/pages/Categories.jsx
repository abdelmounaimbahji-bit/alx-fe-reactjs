import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        const books = await getBooksByCategory(cat.key, 4);
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
    <div className="min-h-screen bg-white py-20 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          Explore Categories
        </h2>

        {/* كل كاتيغوري + كتبها */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const books = booksByCategory[cat.name] || [];
            return (
              <div key={cat.name}>
                {/* عنوان الكاتيغوري */}
                <h3 className={`text-2xl font-semibold text-white mb-4 px-4 py-2 rounded-lg inline-block ${cat.color}`}>
                  {cat.name}
                </h3>

                {/* Grid ديال الكتب */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {books.map((book) => (
                    <Link
                      to={`/book/${book.key}`} // غادي نضيفو صفحة التفاصيل لاحقاً
                      key={book.key}
                      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-48 object-cover rounded-t-xl"
                      />
                      <div className="p-4">
                        <h4 className="text-sm font-semibold text-black mb-1 line-clamp-2">
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
    </div>
  );
}