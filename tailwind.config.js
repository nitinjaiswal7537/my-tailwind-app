/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      'custom-gray': '#717171',
      'custom-black':' #263238'

    },},
  },
  plugins: [],
}
