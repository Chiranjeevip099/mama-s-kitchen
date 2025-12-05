import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./pages/menu.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Auth from "./pages/auth.jsx";   // 👈 Login/Signup page

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} /> {/* 👈 THIS */}
      </Routes>
    </div>
  );
};

export default App;
