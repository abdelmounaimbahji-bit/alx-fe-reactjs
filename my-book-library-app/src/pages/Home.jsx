import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-white">
      <Navbar />
      <Hero />
      <SearchSection />
    </div>
  );
}