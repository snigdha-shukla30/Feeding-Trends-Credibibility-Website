/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      fontFamily: {
        zodiac: ["Zodiac", "sans-serif"],
        general: ["'General Sans'", "sans-serif"],
        stardom: ["'Stardom'", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        telma: ["'Telma'", "serif"],
        gambetta: ["'Gambetta'", "serif"],
        gamberino: ["'Gamberino'", "serif"],
        spectral: ["var(--font-spectral)", "serif"],
      },
    },
  },
  plugins: []
  // plugins: [require('tailwind-scrollbar-hide')],
};
