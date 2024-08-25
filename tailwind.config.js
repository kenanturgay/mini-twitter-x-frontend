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
        'twitter-blue': '#1DA1F2',
        'twitter-light-blue': '#AAB8C2',
      },
    },
  },
  plugins: [],
}