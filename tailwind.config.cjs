// tailwind.config.cjs

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.vue", // This path tells Tailwind to scan all files in your src directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};