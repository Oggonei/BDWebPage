/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"]
      },
      colors: {
        orange_linear: 'bg-gradient-to-r from-[#FB432C] to-[#FF591E]',
        main_orange: '#FB432C',
      },
      backgroundImage: {
        'bdr': "url('/src/assets/images/bdr.jpg')",
        'cloud': "url('/src/assets/images/cloud.jpg')",
        'desktop': "url('/src/assets/images/desktop.jpg')",
        'popupProducts': "url('/src/assets/images/popupProducts.jpg')",
      }
    },
  },
  plugins: [],
})

