import { FaBook, FaDragon, FaRocket, FaMask, FaUser, FaLandmark, FaHeart, FaFileAlt } from "react-icons/fa";

const categories = [
  { name: "Fantasy", icon: FaDragon, color: "bg-purple-500" },
  { name: "Science Fiction", icon: FaRocket, color: "bg-blue-500" },
  { name: "Mystery & Thriller", icon: FaMask, color: "bg-gray-700" },
  { name: "Biography", icon: FaUser, color: "bg-green-600" },
  { name: "History", icon: FaLandmark, color: "bg-yellow-600" },
  { name: "Self-Help", icon: FaHeart, color: "bg-pink-500" },
  { name: "Romance", icon: FaHeart, color: "bg-red-500" },
  { name: "Non-Fiction", icon: FaFileAlt, color: "bg-indigo-500" },
];

export default function Categories() {
  return (
    <div className="min-h-screen min-w-screen bg-white py-16 px-6 font-poppins">
      <div className="max-w-6xl mx-auto">
        {/* titel */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">
          Explore Categories
        </h2>

        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.name}
                className={`${cat.color} text-white rounded-xl p-6 flex flex-col items-center justify-center hover:opacity-90 transition cursor-pointer`}
              >
                <Icon className="text-3xl mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-center">
                  {cat.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}