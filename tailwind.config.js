/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF671F',
        secondary: '#F9F9F9',
        dark: '#282A3A',
      },
      fontFamily: {
        bangla: "'Anek Bangla', sans-serif",
      }
    },
  },
  plugins: [],
}

