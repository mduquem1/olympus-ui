/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
};
