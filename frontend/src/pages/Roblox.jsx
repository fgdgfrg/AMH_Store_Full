import React from "react";
import { Link } from "react-router-dom";

const Roblox = () => {
  const categories = [
    {
      name: "Blox Fruits",
      image:
        "https://cdn.openai.com/content/bloxfruits-cover.webp", // ← استبدلها برابط الصورة اللي أرسلتها لما ترفعها
      path: "/blox-fruits",
      description: "قسم مخصص لبيع فواكه وحسابات Blox Fruits المضمونة 🔥",
    },
    // ممكن تضيف أقسام أخرى هنا لاحقاً
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white py-12 px-6 text-center"
    >
      <h1 className="text-4xl font-bold text-amber-400 mb-10">
        🕹️ Roblox - الأقسام
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <Link
            key={index}
            to={cat.path}
            className="bg-gray-900 hover:bg-gray-800 transition p-6 rounded-2xl shadow-lg border border-gray-800"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <h2 className="text-2xl font-semibold text-amber-300 mb-2">
              {cat.name}
            </h2>
            <p className="text-gray-400">{cat.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Roblox;
