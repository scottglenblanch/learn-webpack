const path = require('path');

module.exports = () => {
  const config1 = {
    entry: {
      app1: './src/app1/index.js'
    },
    output: {
      path: path.join(__dirname, 'app1-dist'),
      filename: 'app1.js'
    }
  };
  const config2 = {
    entry: {
      app2: './src/app2/index.js'
    },
    output: {
      path: path.join(__dirname, 'app2-dist'),
      filename: '[name].js'
    }
  };
  return [config1, config2];
}

