/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        secondary: colors.purple,
        tertiary: colors.cyan,
        neutral: colors.gray,
      },
    },
  },
  plugins: [],
};
