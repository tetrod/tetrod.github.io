'use strict';

const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.11ty.js',
    './src/**/*.md'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ['Jost', 'sans-serif'],
      body: ['Jost', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
       dc1: "url('/assets/dc1.jpg')",
       dc2: "url('/assets/dc2.jpg')",
       nano: "url('/assets/nano.jpg')"

      }
    },
    colors
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
