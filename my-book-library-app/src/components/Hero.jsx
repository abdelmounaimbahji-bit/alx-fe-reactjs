import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const navigate = useNavigate();

  const books = [
    {
      id: "zyTCAlFPjgYC",
      title: "The Silent Stars",
      author: "Elara Vance",
      cover:
        "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80",
      description: "Cosmic mystery across distant galaxies",
    },
    {
      id: "OEBPS12345",
      title: "Mystery of the Moon",
      author: "Luna Sky",
      cover:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      description: "A thrilling adventure under moonlight",
    },
    {
      id: "QWERTY67890",
      title: "Journey to Mars",
      author: "Mark Stellar",
      cover:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      description: "Exploration of the red planet",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % books.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [books.length]);

  const currentBook = books[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % books.length);
  };

  const handleViewBook = () => {
    navigate(`/book/${currentBook.id}`);
  };

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center text-white font-poppins"
      style={{ backgroundImage: `url(${currentBook.cover})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center text-left px-6 md:px-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-2">
          {currentBook.title}
        </h2>
        <p className="text-xl md:text-2xl font-light mb-2">
          by {currentBook.author}
        </p>
        <p className="text-base md:text-lg mb-8 opacity-90 max-w-2xl">
          {currentBook.description}
        </p>

        <button
          onClick={handleViewBook}
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          View Book
        </button>
      </div>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full shadow-lg hover:bg-white/20 transition duration-300 border border-white/20"
      >
        <FaArrowLeft className="text-xl" />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full shadow-lg hover:bg-white/20 transition duration-300 border border-white/20"
      >
        <FaArrowRight className="text-xl" />
      </button>
    </section>
  );
}