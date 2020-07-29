const path = require('path');

module.exports = {
  scripts: {
    'mount:public': 'mount public --to /',
    'mount:src': 'mount src --to /_dist_',
  },
  plugins: ['@snowpack/plugin-babel'],
  buildOptions: {
    minify: false,
  },
};
