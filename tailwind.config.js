/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        dark: '#0a0a0a',
        darker: '#050505',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        cursive: ['"Great Vibes"', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
