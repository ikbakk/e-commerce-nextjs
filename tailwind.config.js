/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['cupcake']
  },
  plugins: [require('prettier-plugin-tailwindcss'), require('daisyui')]
};
