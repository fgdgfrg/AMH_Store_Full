import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    {
      name: "حسابات فورتنايت",
      image: "publicfortnite.jpg",
      gradient: "from-blue-600 to-cyan-400",
      path: "/fortnite",
    },
    {
      name: "حسابات أوفر واتش",
      image: "publicoverwatch.jpg",
      gradient: "from-orange-500 to-yellow-400",
      path: "/overwatch",
    },
    {
      name: "حسابات قنشن",
      image: "publicgenshin.jpg",
      gradient: "from-purple-700 to-violet-500",
      path: "/genshin",
    },
    {
      name: "حسابات روبلوكس",
      image: "publicroblox.jpg",
      gradient: "from-red-600 to-pink-500",
      path: "/roblox",
    },
    {
      name: "حسابات سوني",
      image: "publicsony.jpg",
      gradient: "from-gray-800 to-blue-700",
      path: "/playstation",
    },
    {
      name: "حسابات فيفا",
      image: "publicfifa.jpg",
      gradient: "from-green-500 to-lime-400",
      path: "/fifa",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white text-center py-10">
      <h1 className="text-3xl font-bold text-amber-400 mb-2">
        مرحبًا بك في <span className="text-amber-300">AMH STORE 💎</span>
      </h1>
      <p className="text-gray-300 mb-10">
        وجهتك الأولى لشراء الحسابات الموثوقة بأفضل الأسعار.
      </p>

      {/* الأقسام */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {categories.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="relative rounded-xl cursor-pointer overflow-hidden hover:scale-105 transform transition duration-300 shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover opacity-90"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-50`}
            ></div>
            <div className="absolute bottom-0 w-full p-4 text-center bg-black/50">
              <h2 className="text-xl font-bold text-amber-300">{item.name}</h2>
              <p className="text-gray-300 text-sm">اضغط لتصفح الحسابات</p>
            </div>
          </div>
        ))}
      </div>

      {/* زر واتساب */}
      <div className="mt-10">
        <a
          href="https://wa.me/966593105771"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
        >
          💬 تواصل معنا على الواتساب لشراء الحسابات
        </a>
        <p dir="ltr" className="text-gray-300 mt-1">

</p>


      </div>
    </div>
  );
};

export default Home;
