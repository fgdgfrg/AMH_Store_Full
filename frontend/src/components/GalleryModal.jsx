import React, { useEffect } from "react";

export default function GalleryModal({ open, images = [], index = 0, onClose, onIndex }) {
  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowRight") onIndex?.((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") onIndex?.((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length, onClose, onIndex]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-white"
      >
        إغلاق
      </button>

      <button
        onClick={() => onIndex((i) => (i - 1 + images.length) % images.length)}
        className="absolute left-2 md:left-6 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded"
      >
        ‹
      </button>

      <img
        src={images[index]}
        alt={`img-${index + 1}`}
        className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-2xl"
        loading="eager"
      />

      <button
        onClick={() => onIndex((i) => (i + 1) % images.length)}
        className="absolute right-2 md:right-6 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded"
      >
        ›
      </button>
    </div>
  );
}
