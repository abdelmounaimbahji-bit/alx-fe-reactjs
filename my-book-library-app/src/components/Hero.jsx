import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaStar, FaHeart } from "react-icons/fa";
import { getNewArrivals } from "../services/openLibrary";
import { saveToLocalStorage, getFromLocalStorage } from "../services/localStorage";

export default function Hero() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ratings, setRatings] = useState({});
  const [readingList, setReadingList] = useState([]);

  // Load ratings & reading list from localStorage
  useEffect(() => {
    const savedRatings = getFromLocalStorage("bookRatings") || {};
    const savedList = getFromLocalStorage("readingList") || [];
    setRatings(savedRatings);
    setReadingList(savedList);
  }, []);

  // Fetch new arrivals
  useEffect(() => {
    getNewArrivals(5).then((data) => setBooks(data));
  }, []);

  // Auto slide
  useEffect(() => {
    if (books.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [books]);

  if (books.length === 0) {
    return (
      <section className="relative h-screen w-full flex items-center justify-center bg-gray-800 text-white font-poppins">
        <p className="text-xl">Loading books...</p>
      </section>
    );
  }

  const currentBook = books[currentIndex];

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % books.length);
  const handleViewBook = (key) => navigate(`/book/${key}`);

  // Rating logic
  const setBookRating = (bookKey, value) => {
    const newRatings = { ...ratings, [bookKey]: value };
    setRatings(newRatings);
    saveToLocalStorage("bookRatings", newRatings);
  };

  // Reading list logic
  const toggleReadingList = (book) => {
    const exists = readingList.find((b) => b.key === book.key);
    let newList;
    if (exists) {
      newList = readingList.filter((b) => b.key !== book.key);
    } else {
      newList = [...readingList, book];
    }
    setReadingList(newList);
    saveToLocalStorage("readingList", newList);
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center text-white font-poppins overflow-hidden"
      style={{ backgroundImage: `url(${currentBook.cover})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 md:px-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-2 uppercase">{currentBook.title}</h2>
        <p className="text-xl md:text-2xl font-light italic mb-2">by {currentBook.author}</p>
        <p className="text-base md:text-lg mb-6 opacity-90 max-w-xl">{currentBook.description || "No description available."}</p>

        {/* Rating */}
        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`cursor-pointer transition ${
                ratings[currentBook.key] >= star ? "text-yellow-400" : "text-gray-400"
              }`}
              onClick={() => setBookRating(currentBook.key, star)}
            />
          ))}
        </div>

        {/* View Book & Add to Reading List */}
        <div className="flex gap-4 justify-center mb-6">
          <button
            onClick={() => handleViewBook(currentBook.key)}
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            View Book
          </button>

          <button
            onClick={() => toggleReadingList(currentBook)}
            className={`px-6 py-3 rounded-md font-semibold transition flex items-center gap-2 ${
              readingList.find((b) => b.key === currentBook.key)
                ? "bg-red-600 text-white hover:bg-red-700"
                : "bg-gray-700 text-white hover:bg-gray-800"
            }`}
          >
            <FaHeart />
            {readingList.find((b) => b.key === currentBook.key) ? "Remove" : "Add"}
          </button>
        </div>
      </div>

      {/* Prev/Next */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-4 rounded-full shadow-lg border border-white/20 transition hover:bg-blue-600 hover:scale-110"
      >
        <FaArrowLeft className="text-xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/40 text-white p-4 rounded-full shadow-lg border border-white/20 transition hover:bg-blue-600 hover:scale-110"
      >
        <FaArrowRight className="text-xl" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 w-full flex justify-center gap-3 z-20">
        {books.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
