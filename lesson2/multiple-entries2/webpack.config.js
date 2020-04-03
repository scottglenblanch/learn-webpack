module.exports = {
  entry: {
    ['app1/index']: './src/app1/index.js',
    ['app2/index']: './src/app2/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};