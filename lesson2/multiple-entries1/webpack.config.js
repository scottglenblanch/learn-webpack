module.exports = {
  entry: {
    'app1': './src/app1/index.js',
    'app2': './src/app2/index.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
};