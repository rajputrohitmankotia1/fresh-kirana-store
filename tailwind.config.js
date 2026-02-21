/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#16a34a",
        darkGreen: "#14532d",
        lightBg: "#f8fafc",
        accent: "#facc15",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)",
      }
    },
  },
  plugins: [],
}