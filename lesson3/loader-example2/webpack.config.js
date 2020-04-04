const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
  module: {
  rules: [
   {
     test: /\.zzz$/,
     use: [
       'zzz-loader',
       'censor-loader',
     ],
   },
  ],
 },
};