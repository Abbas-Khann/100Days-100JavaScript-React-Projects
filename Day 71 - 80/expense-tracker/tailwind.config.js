module.exports = {
  darkmode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'light_mode': "url('/expense-tracker/public/front_img.png')",
        'dark_mode': "url('/expense-tracker/public/second_img.png')"
      }
    },
  },
  plugins: [],
}