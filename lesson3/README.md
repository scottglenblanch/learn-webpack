# Lesson 3

Loader Lessons

Will load CSS

```npm install --save-dev style-loader css-loader```


```$xslt
  const path = require('path');

  module.exports = {
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader',
+         ],
+       },
+     ],
+   },
  };
```

### Resources

* [Webpack Loaders](https://webpack.js.org/concepts/#loaders)
