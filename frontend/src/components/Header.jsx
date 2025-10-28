import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* 🔝 شريط التنقل الرئيسي */}
      <header className="bg-gray-900 text-white py-4 shadow-lg">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
          {/* شعار المتجر */}
          <Link
            to="/"
            className="text-3xl font-bold text-amber-400 hover:text-amber-300 transition duration-300"
          >
            AMH STORE 💎
          </Link>

          {/* روابط التنقل */}
          <nav className="flex flex-wrap justify-center sm:justify-end gap-4 mt-3 sm:mt-0">
            <Link to="/" className="hover:text-amber-400">الرئيسية</Link>
            <Link to="/cart" className="hover:text-amber-400">السلة</Link>
            <Link to="/faq" className="hover:text-amber-400">الأسئلة</Link>
            <Link to="/privacy" className="hover:text-amber-400">الخصوصية</Link>
            <Link to="/terms" className="hover:text-amber-400">الشروط</Link>
          </nav>
        </div>
      </header>

      {/* 💬 زر واتساب ثابت */}
      <a
        href="https://wa.me/966593105771"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-5 rounded-full shadow-lg hover:scale-105 transform transition duration-300"
      >
        💬 تواصل معنا
      </a>
    </>
  );
};

export default Header;
