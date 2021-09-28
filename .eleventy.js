'use strict';

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = eleventyConfig => {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({
    './src/css/main.css': '/main.css'
  });

  return {
    dir: {
      input: './src',
      output: './build',
      layouts: './includes',
    },
    templateFormats: [
      'md'
    ]
  };
};
