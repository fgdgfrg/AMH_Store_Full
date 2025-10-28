import React, { useState } from "react";

export default function PlayStation() {
  const [showGallery, setShowGallery] = useState(false);

  const images = Array.from(
    { length: 18 },
    (_, i) => `/images/playstation/playstation${i + 1}.jpg`
  );

  return (
    <div className="bg-black text-white min-h-screen py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-10">
        🎮 حسابات PlayStation المتوفرة
      </h1>

      {/* بطاقة الحساب */}
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#1f1f2e] to-[#111] rounded-3xl shadow-xl p-6 border border-gray-800">
        <img
          src="/images/playstation/playstation1.jpg"
          alt="PlayStation Account"
          className="rounded-2xl w-full h-56 object-cover mb-4 shadow-md"
        />

        <h2 className="text-2xl font-bold text-yellow-300 mb-2 text-center">
          حساب PlayStation 🇬🇧
        </h2>

        <ul className="text-gray-300 text-sm space-y-2 leading-relaxed text-center">
          <li>🔹 الحساب سوني والستور بريطاني (GB)</li>
          <li>🔹 يحتوي على أكثر من 180 لعبة تختيم وأونلاين 🔥</li>
          <li>
            🔹 أهم الألعاب: Uncharted 4 – RDR2 – The Last of Us (كل النسخ) – God
            of War – Resident Evil (كل الأجزاء) – Spider-Man – Outlast
          </li>
        </ul>

        <p className="text-green-400 text-lg font-semibold text-center mt-4">
          السعر: 500 ريال
        </p>

        <div className="flex justify-center gap-3 mt-5">
          <button
            onClick={() => setShowGallery(!showGallery)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-5 rounded-xl"
          >
            {showGallery ? "إخفاء الصور" : "عرض الصور"}
          </button>

          <a
            href="https://wa.me/966xxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-xl"
          >
            تواصل واتساب
          </a>
        </div>
      </div>

      {/* معرض الصور (مخفي إلا عند الضغط) */}
      {showGallery && (
        <div className="max-w-6xl mx-auto mt-10">
          <h3 className="text-3xl font-bold text-center text-yellow-400 mb-6">
            📸 معرض صور الحساب
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`PlayStation Account ${i + 1}`}
                className="rounded-xl shadow-md hover:scale-[1.03] transition-transform"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
