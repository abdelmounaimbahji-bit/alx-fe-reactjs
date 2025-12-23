import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function BookDetails() {
  const { key } = useParams(); // Google Books ID
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBook() {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes/${key}`
        );

        if (!res.ok) throw new Error("Book not found");

        const data = await res.json();
        setBook(data);
      } catch (error) {
        console.error("Book details error:", error);
        setBook(null);
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [key]);

  if (loading)
    return <p className="text-center py-10">Loading book details...</p>;

  if (!book)
    return <p className="text-center py-10">Book not found.</p>;

  const info = book.volumeInfo;

  const cover =
    info.imageLinks?.thumbnail ||
    "https://via.placeholder.com/400x600?text=No+Cover";

  const description =
    info.description || "No description available.";

  const authorName = info.authors?.[0] || "Unknown Author";

  return (
    <div className="min-h-screen min-w-screen bg-white py-10 px-6 font-poppins">
      <div className="max-w-5xl mx-auto mb-8">

      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <img
            src={cover}
            alt={info.title}
            className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
          />
        </div>

        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            {info.title}
          </h1>

          <h2 className="text-xl text-gray-700">
            by {authorName}
          </h2>

          <div className="prose prose-sm max-w-none text-gray-800">
            <p>{description}</p>
          </div>

          {info.publishedDate && (
            <p className="text-sm text-gray-600">
              Published: {info.publishedDate}
            </p>
          )}

          <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition">
            Add to Reading List
          </button>
        </div>
      </div>
    </div>
  );
}
