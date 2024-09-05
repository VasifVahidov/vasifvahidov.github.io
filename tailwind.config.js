/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a202c', // Custom primary color
        'secondary': '#edf2f7' // Custom secondary color
      },
    },
  },
  plugins: [],
}
