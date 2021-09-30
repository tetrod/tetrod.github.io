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
       'sch2': "url('/assets/sch2.jpg')"
      }
    },
    colors
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
