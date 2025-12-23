import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getNewArrivals } from "../services/openLibrary";

export default function NewArrivals() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewArrivals(24).then((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen min-w-screen bg-white flex items-center justify-center font-poppins">
        <p className="text-gray-600">Loading new arrivals...</p>
      </div>
    );

  return (
    <div className="min-h-screen min-w-screen bg-white py-10 px-6 font-poppins">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-10">


        <h2 className="text-4xl md:text-5xl font-bold text-black">
          New Arrivals
        </h2>
      </div>

      
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {books.map((book) => (
          <div
            key={book.key}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
          >
            {/* Cover */}
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-64 object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
            />

            
            <div className="p-4">
              <h3 className="text-sm font-semibold text-black mb-2 line-clamp-2">
                {book.title}
              </h3>
              <p className="text-xs text-gray-600 mb-4">{book.author}</p>

              
              <Link to={`/book/${book.key}`}

                className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2.5 rounded-md text-sm font-medium transition text-center block"
              >
                View Book
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}