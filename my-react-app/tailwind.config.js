/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#572500',
          hover: '#6b2d00'
        },
        secondary: {
          DEFAULT: '#D9531E',
          hover: '#e65f2a'
        }
      },
      fontFamily: {
        sans: ['Cinzel', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 