export default function Home() {
  return (
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
  );
}
