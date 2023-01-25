/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'scale-in-center':
          'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-in-right':
          'slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both',
        'slide-out-right':
          'slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530)   both',
        'fade-in':
          'fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both',
        'fade-out': 'fade-out 0,5s ease   both'
      },
      keyframes: {
        'scale-in-center': {
          '0%': {
            transform: 'scale(0)',
            opacity: '1'
          },
          to: {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(1000px)',
            opacity: '0'
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        'slide-out-right': {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1'
          },
          to: {
            transform: 'translateX(1000px)',
            opacity: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1'
          },
          to: {
            opacity: '0'
          }
        }
      }
    }
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
