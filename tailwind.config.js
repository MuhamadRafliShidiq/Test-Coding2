/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#131424',
        'dark-blue': '#1e3a5f',
        'dark-blue-light': '#2a5270',
      },
    },
  },
  plugins: [],
};