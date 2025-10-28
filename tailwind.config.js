/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {

      transitionProperty: {
        'fade': 'opacity',
      },

      transitionDuration: {
        'fade': '0.5s',
      },

      transitionTimingFunction: {
        'fade': 'ease-in-out',
      },
    },
  },
  plugins: [],
}