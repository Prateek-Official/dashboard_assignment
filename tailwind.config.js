// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1e90ff',
        darkGray: '#1a1a1a',
        initialsLogo: '#523ccd',
      },
    },
  },
  plugins: [],
};