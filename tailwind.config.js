/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: ['cupcake']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    require('daisyui')
  ]
};
