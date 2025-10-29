import React from "react";

export default function Terms() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          الشروط والأحكام
        </h1>

        <p className="text-gray-700 leading-loose mb-4">
          من خلال استخدامك لموقع <strong>AMH Store</strong>، فإنك توافق على الالتزام بالشروط والأحكام التالية.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          الاستخدام المسموح
        </h2>
        <p className="text-gray-700 leading-loose mb-4">
          يُسمح باستخدام الموقع فقط للأغراض الشخصية والقانونية. يُمنع استخدامه لأي نشاط غير قانوني أو مخالف للقيم العامة.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          الملكية الفكرية
        </h2>
        <p className="text-gray-700 leading-loose mb-4">
          جميع الحقوق محفوظة لموقع AMH Store. لا يجوز نسخ أو إعادة نشر أي جزء من الموقع دون إذن كتابي مسبق.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">
          التعديلات على الشروط
        </h2>
        <p className="text-gray-700 leading-loose mb-4">
          نحتفظ بحق تعديل هذه الشروط في أي وقت. سيتم إشعار المستخدمين بأي تغييرات مهمة عند اللزوم.
        </p>

        <p className="text-gray-600 mt-8 text-center">
          آخر تحديث: 29 أكتوبر 2025.
        </p>
      </div>
    </div>
  );
}
