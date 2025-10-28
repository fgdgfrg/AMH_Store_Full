import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6 text-right">
      <h1 className="text-3xl font-bold text-amber-400 mb-4">
        📜 الشروط والأحكام
      </h1>
      <p className="text-gray-300 leading-relaxed">
        باستخدامك موقع <span className="text-amber-300">AMH STORE</span>، فإنك توافق
        على جميع الشروط التالية:
        <br />- الحسابات المباعة غير قابلة للاسترجاع بعد الشراء.
        <br />- يجب التأكد من المنتج قبل الدفع.
        <br />- المتجر غير مسؤول عن أي ربط خارجي بعد البيع.
        <br />- في حال وجود مشكلة، يمكنك التواصل معنا مباشرة عبر الواتساب.
      </p>
    </div>
  );
};

export default TermsConditions;
