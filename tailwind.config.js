/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['\"Playfair Display\"', 'serif'],
      },
      colors: {
        base: "#f8f5f1",
        text: "#2e2b29",
        accent: "#4a4847",
        border: "#d8d3cb"
      },
    },
  },
  plugins: [],
}