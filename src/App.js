import React from "react";
import "./index.css";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex justify-between items-center px-6 py-4 bg-zinc-900">
        <div className="flex items-center space-x-2">
  <img src="/logo.png" alt="RustDeals Logo" className="h-8 w-8 object-contain" />
  <h1 className="text-xl font-extrabold tracking-wide">RUSTDEALS</h1>
</div>

        <nav className="flex gap-6 items-center text-sm">
          <a href="#" className="text-purple-400 underline font-semibold">HOME</a>
          <a href="#" className="hover:text-purple-300">SHOP</a>
          <span className="hidden sm:inline">+1.2245171873</span>
          <div className="flex gap-3 text-xl">
            <span role="img" aria-label="search">🔍</span>
            <span role="img" aria-label="cart">🛒</span>
            <span role="img" aria-label="user">👤</span>
          </div>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center text-center h-[calc(100vh-80px)] px-6 bg-black bg-opacity-90">
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-4 tracking-tight">
          SKIN DEALS & DISCOUNTS
        </h2>
        <p className="text-lg text-zinc-300 mb-8">
          GET RUST SKINS FOR CHEAPER
        </p>
        <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition">
          BUY SKINS
        </button>
      </main>
    </div>
  );
}

export default App;
