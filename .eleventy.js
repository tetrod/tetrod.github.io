'use strict';

module.exports = cfg => {

  cfg.addPassthroughCopy('./src/css');

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
