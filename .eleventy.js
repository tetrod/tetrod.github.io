'use strict';

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = eleventyConfig => {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({
    './src/css/main.css': '/assets/main.css',
    './src/img/sch2.jpg': '/assets/sch2.jpg'
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
