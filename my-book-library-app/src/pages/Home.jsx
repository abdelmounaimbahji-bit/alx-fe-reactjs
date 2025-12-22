import Hero from "../components/Hero";
import SearchSection from "../components/SearchSection";
import CategoriesSection from "../components/CategoriesSection";
import NewArrivalsSection from "../components/NewArrivalsSection";
import AboutUsSection from "../components/AboutUsSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-white">
      
      <Hero />
      <SearchSection />
      <CategoriesSection />
      <NewArrivalsSection />
      <AboutUsSection />
      <ContactSection />
    </div>
  );
}
