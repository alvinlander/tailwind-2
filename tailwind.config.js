const colors = require('tailwindcss/colors');
module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        trueGray: colors.trueGray,
        red: colors.red,
        lightBlue: colors.lightBlue,
        yellow: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
