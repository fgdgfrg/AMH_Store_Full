import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      q: "ما هو متجر AMH STORE؟",
      a: "هو متجر إلكتروني متخصص في بيع الحسابات المضمونة والموثوقة، مع ضمان الأمان والجودة العالية.",
    },
    {
      q: "هل الحسابات مضمونة؟",
      a: "نعم ✅ جميع الحسابات التي نقدمها مضمونة 100% ويتم التحقق منها قبل البيع لضمان رضا العميل.",
    },
    {
      q: "هل يمكنني عرض حسابي للبيع؟",
      a: "نعم، يمكنك ذلك بشرط أن يكون الحساب أصليًا وغير مرتبط بأي جهة أخرى، ويتم مراجعته قبل عرضه.",
    },
    {
      q: "كيف يمكنني التواصل مع الدعم الفني؟",
      a: "يمكنك التواصل معنا من خلال صفحة “تواصل معنا” أو عبر البريد الإلكتروني الرسمي الخاص بالمتجر.",
    },
    {
      q: "كم تستغرق عملية التسليم؟",
      a: "عادةً يتم التسليم خلال دقائق بعد الدفع، وفي بعض الحالات قد يستغرق الأمر حتى 24 ساعة كحد أقصى.",
    },
  ];

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 px-6 text-center"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-amber-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        الأسئلة الشائعة
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 hover:bg-gray-800 transition-colors p-6 rounded-2xl shadow-lg text-right border border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 className="text-amber-300 font-semibold text-xl mb-2">
              {faq.q}
            </h2>
            <p className="text-gray-300 leading-relaxed">{faq.a}</p>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-500 mt-12 text-sm">
        آخر تحديث: 29 أكتوبر 2025
      </p>
    </div>
  );
};

export default FAQ;
