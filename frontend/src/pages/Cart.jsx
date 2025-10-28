import React from "react";

const Cart = ({ cart, setCart }) => {
  const handleRemove = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-black text-white min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold text-amber-400 mb-6">🛒 سلة المشتريات</h1>

      {cart.length === 0 ? (
        <p className="text-gray-400">السلة فارغة حاليًا.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between shadow-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="text-right">
                  <h2 className="text-lg font-bold text-amber-300">{item.name}</h2>
                  <p className="text-green-400">{item.price} ريال</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(index)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded-lg mt-3 sm:mt-0"
              >
                حذف
              </button>
            </div>
          ))}

          <div className="mt-6 text-xl font-semibold">
            المجموع الكلي: <span className="text-green-400">{total} ريال</span>
          </div>

          <a
            href="https://wa.me/966593105771"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-5"
          >
            💬 تواصل معنا عبر الواتساب لإتمام الشراء
          </a>
        </div>
      )}
    </div>
  );
};

export default Cart;
