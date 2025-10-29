import React from "react";

export default function Privacy() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          سياسة الخصوصية
        </h1>

        <p className="text-gray-700 leading-loose mb-4">
          نحن في <strong>AMH Store</strong> نحترم خصوصيتك، ونلتزم بحماية بياناتك الشخصية وفقًا لأفضل الممارسات. تهدف هذه السياسة إلى شرح كيفية جمعنا واستخدامنا وحمايتنا لمعلوماتك.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          المعلومات التي نجمعها
        </h2>
        <p className="text-gray-700 leading-loose mb-4">
          نقوم بجمع بعض المعلومات عند استخدامك لموقعنا، مثل الاسم والبريد الإلكتروني لأغراض التواصل وتحسين الخدمات.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          استخدام المعلومات
        </h2>
        <p className="text-gray-700 leading-loose mb-4">
          نستخدم المعلومات لتقديم خدماتنا بشكل أفضل، وإرسال التحديثات والعروض الجديدة بشكل اختياري.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          حماية البيانات
        </h2>
        <p className="text-gray-700 leading-loose mb-4">
          نلتزم باستخدام أنظمة أمان متقدمة لحماية بيانات المستخدمين من الوصول غير المصرح به أو أي إساءة استخدام.
        </p>

        <p className="text-gray-600 mt-8 text-center">
          تم آخر تحديث لهذه السياسة بتاريخ 29 أكتوبر 2025.
        </p>
      </div>
    </div>
  );
}
