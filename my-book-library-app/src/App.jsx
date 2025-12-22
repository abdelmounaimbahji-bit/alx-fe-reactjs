import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Categories from "./pages/Categories";
import NewArrivals from "./pages/NewArrivals";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import BookDetail from "./pages/BookDetail";

export default function App() {
  return (
    <BrowserRouter>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<Search />} />
        <Route path="/book/:key" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
