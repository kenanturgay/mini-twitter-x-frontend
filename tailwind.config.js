/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'twitter-blue': '#1D9BF0',
        'twitter-light-blue': '#1A8CD8',
        'tw-hover':'#ECF7FE',
      },
    },
  },
  plugins: [],
}