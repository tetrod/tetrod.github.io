'use strict';

const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Jost', 'sans-serif'],
      body: ['Jost', 'sans-serif'],
    },
    extend: {},
    colors
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
