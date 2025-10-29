import React from "react";

const BloxFruits = () => {
  const products = [
    {
      name: "فاكهة النور (Light Fruit)",
      price: "15 ريال",
      image: "https://i.ibb.co/7JM1P2G/light-fruit.jpg",
    },
    {
      name: "فاكهة النار (Flame Fruit)",
      price: "10 ريال",
      image: "https://i.ibb.co/1s5tPjK/flame-fruit.jpg",
    },
    // بتقدر تضيف فواكه جديدة بعدين 👇
    // { name: "فاكهة الظلام", price: "20 ريال", image: "..." },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white py-12 px-6 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <img
          src="https://i.ibb.co/8gW7d7h/bloxfruits-banner.jpg" // ← غيّرها إلى الصورة اللي أرسلتها
          alt="Blox Fruits"
          className="w-full h-60 object-cover rounded-2xl mb-10"
        />
        <h1 className="text-4xl font-bold text-amber-400 mb-6">
          🥭 قسم Blox Fruits
        </h1>
        <p className="text-gray-400 mb-10">
          هنا تجد جميع الفواكه والحسابات الخاصة بلعبة Blox Fruits بأسعار مميزة وضمان كامل 🔒
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-gray-900 p-5 rounded-xl shadow-lg hover:shadow-amber-400/20 transition border border-gray-800"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl text-amber-300 font-semibold mb-2">
                {product.name}
              </h3>
              <p className="text-gray-300 mb-3">{product.price}</p>
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-4 rounded-lg transition">
                شراء الآن
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BloxFruits;
