# README

* Get WebPack Working
* Integrate Hot Module Reloading
* Integrate Flow
* Integrate React/ES6
* Integrate into Rails


## Best Resource on React Hot Loader and WebPack

* http://gaearon.github.io/react-hot-loader/getstarted/
* http://webpack.github.io/docs/hot-module-replacement-with-webpack.html

## Starting WebPack

webpack-dev-server --progress --colors

webpack.config.js
```javascript
module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.coffee$/, loader: 'coffee-jsx-loader'}
    ]
  }
}
```

```html
<script src="http://localhost:8080/webpack-dev-server.js"></script>
<script src="bundle.js"></script>
```