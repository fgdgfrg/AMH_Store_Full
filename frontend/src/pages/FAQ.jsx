import React from "react";

const FAQ = () => {
  const faqs = [
    {
      q: "ماهو متجر AMH STORE؟",
      a: "متجر متخصص في بيع الحسابات المضمونة والموثوقة بأسعار مميزة.",
    },
    {
      q: "هل نحن مضمونون؟",
      a: "نعم ✅ جميع الحسابات مضمونة 100% من المتجر.",
    },
    {
      q: "هل يمكن عرض حسابي للبيع؟",
      a: "نعم، بشرط أن يكون الحساب غير مرتبط وبمصدر موثوق.",
    },
    {
      q: "ماهو رقم التواصل؟",
      a: "رقم التواصل الرسمي: +966 59 310 5771.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen p-6 text-center">
      <h1 className="text-3xl font-bold text-amber-400 mb-6">❓ الأسئلة الشائعة</h1>

      <div className="space-y-4 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 p-4 rounded-lg shadow-md text-right"
          >
            <h2 className="text-amber-300 font-bold mb-2">{faq.q}</h2>
            <p className="text-gray-300">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
