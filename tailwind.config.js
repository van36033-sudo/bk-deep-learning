/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f8ff',
          100: '#e9f1ff',
          200: '#cfe0ff',
          300: '#a7c6ff',
          400: '#78a3ff',
          500: '#4f7dff',
          600: '#365ef2',
          700: '#2c4bd0',
          800: '#273fa8',
          900: '#223884'
        }
      }
    }
  },
  plugins: []
};
