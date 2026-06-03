/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2BB8A2", // Hijau Toska sesuai desain
        secondary: "#111827", // Navy Gelap untuk footer/CTA
      },
    },
  },
  plugins: [],
};