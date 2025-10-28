import React, { useState } from "react";
import overwatchAccounts from "../data/overwatch";
import GalleryModal from "../components/GalleryModal";

export default function Overwatch() {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const [curr, setCurr] = useState(0);

  const hasAccounts = overwatchAccounts && overwatchAccounts.length > 0;
  const acc = hasAccounts ? overwatchAccounts[curr] : null;

  if (!hasAccounts) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-3xl font-bold mb-4 text-amber-300">
          🚫 لا توجد حسابات متاحة حاليًا
        </h1>
        <p className="text-gray-400">
          تحقق لاحقًا، سيتم إضافة حسابات جديدة قريبًا إن شاء الله.
        </p>
      </div>
    );
  }

  const whatsappLink = `https://wa.me/${acc.whatsapp}?text=${encodeURIComponent(
    `أرغب بشراء: ${acc.title} (ID: ${acc.id}) بسعر ${acc.price} ريال`
  )}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-amber-300 text-center mb-6">
        حسابات أوفر واتش
      </h1>

      {/* البطاقة */}
      <div className="bg-[#0f172a] rounded-2xl shadow-xl overflow-hidden">
        <img
          src={acc.cover}
          alt={acc.title}
          className="w-full max-h-[420px] object-cover"
          onClick={() => {
            setIdx(0);
            setOpen(true);
          }}
        />

        <div className="p-5">
          <h2 className="text-2xl font-extrabold text-white mb-2">
            {acc.title}
          </h2>
          <p className="text-gray-300 mb-3">{acc.short}</p>

          <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
            {acc.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-emerald-400 font-bold text-lg">
              {acc.price} ريال
            </span>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-xl"
            >
              تواصل واتساب
            </a>

            <button
              onClick={() => {
                setIdx(0);
                setOpen(true);
              }}
              className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl"
            >
              عرض التفاصيل (معرض الصور)
            </button>
          </div>

          {/* شبكة صور مصغّرة */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 mt-6">
            {acc.gallery.map((g, i) => (
              <img
                key={g}
                src={g}
                alt={`thumb-${i + 1}`}
                className="h-24 w-full object-cover rounded-lg cursor-pointer hover:opacity-80"
                onClick={() => {
                  setIdx(i);
                  setOpen(true);
                }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>

      {/* مودال المعرض */}
      <GalleryModal
        open={open}
        images={acc.gallery}
        index={idx}
        onClose={() => setOpen(false)}
        onIndex={(updater) =>
          setIdx((i) =>
            typeof updater === "function" ? updater(i) : updater
          )
        }
      />
    </div>
  );
}
