import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <header className="flex justify-between items-center px-6 py-4 bg-zinc-900">
          <div className="flex items-center space-x-2">
            <img src="/logo.png" alt="RustDeals Logo" className="h-8 w-8 object-contain" />
            <h1 className="text-xl font-extrabold tracking-wide">RUSTDEALS</h1>
          </div>

          <nav className="flex gap-6 items-center text-sm">
            <Link to="/" className="text-purple-400 underline font-semibold">HOME</Link>
            <Link to="/shop" className="hover:text-purple-300">SHOP</Link>
            <span className="hidden sm:inline"></span>
            <div className="flex gap-3 text-xl">
              <span role="img" aria-label="search">🔍</span>
              <span role="img" aria-label="cart">🛒</span>
              <span role="img" aria-label="user">👤</span>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
