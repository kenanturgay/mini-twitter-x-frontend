/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/main.jsx",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'twitter-blue': '#1A8CD8',
        'twitter-light-blue': '#1D9BF0',
        'tw-hover':'#ECF7FE',
        'underline-blue' :'#1DA1F2',
      },
    },
  },
  plugins: [],
}