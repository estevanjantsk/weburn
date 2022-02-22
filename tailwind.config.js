module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'wb-black': '#1F1E1E',
        'wb-zinc': '#272727',
        'wb-red': '#FF1E25',
        'wb-grey': '#C4C4C4',
      }
    },
  },
  plugins: [],
}