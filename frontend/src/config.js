/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          300: "#FCD34D",
          400: "#FBBF24",
        },
        gray: {
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
        },
      },
      boxShadow: {
        glow: "0 0 15px rgba(251,191,36,0.4)",
      },
    },
  },
  plugins: [],
};
