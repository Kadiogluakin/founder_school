/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        yellow: '#FFDA3E',
        blue: '#14D0EA',
      },
      fontFamily: {
        title: ['Monument Extended', 'sans-serif'],
        body: ['Avenir', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 