'use strict';

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = eleventyConfig => {

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy({
    './src/css/main.css': '/assets/main.css',
    './src/img/*.jpg': '/assets/'
  });

  eleventyConfig.addWatchTarget("./src/css");

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
