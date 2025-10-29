import React from "react";

const Roblox = () => {
  return (
    <div
      dir="rtl"
      className="min-h-screen bg-black text-white py-20 px-6 text-center flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold text-amber-400 mb-8">
        🕹️ Roblox
      </h1>

      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 max-w-md">
        <h2 className="text-2xl font-semibold text-amber-300 mb-4">
          🚫 لا توجد حسابات متاحة حاليًا
        </h2>
        <p className="text-gray-400">
          سيتم إضافة حسابات Roblox قريباً بإذن الله 🔥
        </p>
      </div>
    </div>
  );
};

export default Roblox;
