import React, { useState } from "react";
import { motion } from "framer-motion";

const genshinAccounts = [
  {
    id: 1,
    title: "حساب قنشن — سيرفر أمريكا 🌎",
    description: `
      🔹 الشخصيات ★5: تانغري، داهيا، كينتش، رايدن شوقن  
      🔹 الرانك: 45  
      🔹 فيه أكثر من 3000 برايموجيم 💎  
      🔹 الحساب توه في البداية، فيه مهام كثيرة وموارد مفتوحة  
      🔹 فرصة كبيرة لتطوير الحساب بسرعة وجمع موارد نادرة ✨
    `,
    price: 70,
    whatsapp: "966593105771",
    images: [
      "/images/genshin/1.jpg",
      "/images/genshin/2.jpg",
      "/images/genshin/3.jpg",
      "/images/genshin/4.jpg",
      "/images/genshin/5.jpg",
    ],
  },
  {
    id: 2,
    title: "حساب قنشن — سيرفر أوروبي 🇪🇺",
    description: `
      🔹 الشخصيات ★5: ستلالي C2 وسلاحها R2، مافويكا + سلاحها، يلان، مونا، طنغري، كلورنيد  
      🔹 بينت C6 🔥  
      🔹 رانك عالي (AR 55)  
      🔹 الحساب مليان برايموجيم 💎 وجاهز لتجمع براحه  
      🔹 مناطق كثيرة غير مستكشفة (تقدر تخلصها وتجمع موارد بسهولة)  
      🔹 الحساب قوي جدًا ومتنوع الشخصيات 💥  
    `,
    price: 130,
    whatsapp: "966593105771",
    images: [
      "/images/genshin/6.jpg",
      "/images/genshin/7.jpg",
      "/images/genshin/8.jpg",
      "/images/genshin/9.jpg",
      "/images/genshin/10.jpg",
    ],
  },
  {
    id: 3,
    title: "حساب قنشن — مافويكا C2 + سلاحها 🔥",
    description: `
      🔹 مافويكا C2 مع سلاحها الأصلي  
      🔹 ستلالي موجودة  
      🔹 بينت C6 💥  
      🔹 تم فتح شخصية لوما الجديدة  
      🔹 الحساب فيه أكثر من 200 وشات ومهام كثيرة جدًا قابلة للتفريم  
      🔹 العالم مليان موارد وأقمار تحتاج تفرمها براحتك  
    `,
    price: 100,
    whatsapp: "966593105771",
    images: [
      "/images/genshin/11.jpg",
      "/images/genshin/12.jpg",
      "/images/genshin/13.jpg",
    ],
  },
  {
    id: 4,
    title: "حساب قنشن أوروبي — 32 فايف ستار 💫",
    description: `
      السلام عليكم ورحمة الله وبركاته 🌸  
      🔹 الحساب أوروبي فيه 32 شخصية ★5 كما موضح في الصور  
      🔹 الشخصيات المهمة:  
         • آرلكينو C1  
         • نوفليت C1  
         • يوميا C1  
         • أيولا C1  
         • كزوها C1  
      🔹 أغلب الفورستار C5 أو مكتملين ✅  
      🔹 يربط بأي منصة (يجي معه حساب سوني جاهز إذا حاب)  
      🔹 التحويل بنكي فقط 💵  
      🔹 ضمان مدى الحياة على الحساب 🔒  
      🔹 الحساب تم تجديده وجت فيه مولاني + سلاحها وناهيدا ✨  
      🔹 السعر قابل للتفاوض 💬  
      🔹 يقبل بدل بحساب فورت نايت فيه حزمه أركين جينكس أو سكنات رزدنت إيفل  
    `,
    price: "قابل للتفاوض",
    whatsapp: "966593105771",
    images: [
      "/images/genshin/14.jpg",
      "/images/genshin/15.jpg",
      "/images/genshin/16.jpg",
      "/images/genshin/17.jpg",
    ],
  },
];

export default function Genshin() {
  const [selectedAccount, setSelectedAccount] = useState(null);

  return (
    <div className="text-white min-h-screen bg-gradient-to-b from-black via-gray-900 to-black p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-amber-400 mb-8">
        🌸 حسابات قنشن المتوفرة 🌸
      </h1>

      {/* قائمة الحسابات */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {genshinAccounts.map((account) => (
          <motion.div
            key={account.id}
            className="bg-gradient-to-b from-purple-800 to-indigo-900 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={account.images[0]}
              alt={account.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-amber-300 mb-2">{account.title}</h2>
            <p className="text-gray-300 text-sm mb-4 whitespace-pre-line leading-relaxed">
              {account.description}
            </p>
            <p className="text-lg font-semibold text-green-400 mb-4">
              السعر: {account.price} ريال
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${account.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition"
              >
                تواصل واتساب
              </a>
              <button
                onClick={() => setSelectedAccount(account)}
                className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg font-semibold transition"
              >
                عرض التفاصيل
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* مودال عرض التفاصيل */}
      {selectedAccount && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 p-4 overflow-y-auto">
          <h2 className="text-3xl font-bold text-amber-400 mb-4 text-center">
            {selectedAccount.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 w-full max-w-6xl">
            {selectedAccount.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`صورة ${index + 1}`}
                className="rounded-xl shadow-lg object-cover w-full h-64 sm:h-72 md:h-80"
              />
            ))}
          </div>

          <button
            onClick={() => setSelectedAccount(null)}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-white font-semibold mt-2"
          >
            إغلاق
          </button>
        </div>
      )}
    </div>
  );
}
