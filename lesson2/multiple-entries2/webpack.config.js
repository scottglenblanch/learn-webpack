module.exports = {
  entry: {
    ['/dist/app1/index.js']: './src/app1/index.js',
    ['/dist/app2/index.js']: './src/app2/index.js'
  },
  output: {
    filename: '[name]',
    path: __dirname,
  }
};