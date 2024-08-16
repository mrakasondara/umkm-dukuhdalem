/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': 'Poppins',
        'Open': 'Open Sans'
      },
      colors: {
        'Primary': '#ffde4d',
        'Secondary': '#ff4c4c',
      },
      backgroundImage: {
        'hero-produk': "url('./public/hero-produk.png')",
      }
    },
  },
  plugins: [],
}

