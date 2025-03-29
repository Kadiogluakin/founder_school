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
        'yellow-dark': '#EBC52A',
        blue: '#14D0EA',
        'blue-dark': '#0DA6BD',
        gray: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          500: '#6B7280',
          800: '#1F2937',
        },
      },
      fontFamily: {
        title: ['Monument Extended', 'sans-serif'],
        body: ['Avenir', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 