var path = require('path');

// plugins to create shared library chunks
var webpack = require('webpack');
var sharedPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'shared',
  filename: 'shared.js',
  minChunks: Infinity
});

// plugins to extract text into separate files
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var cssExtractorPlugin = new ExtractTextPlugin('[name].css');

module.exports = {
  entry: {
    'entry': [
      'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
      'webpack/hot/dev-server',
      './fe/entry.jsx'
    ],
    'shared': [
      'jquery',
      'react'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.coffee$/, loaders: ['react-hot', 'coffee-jsx-loader']},
      {test: /\.jsx$/,    loaders: ['react-hot', 'jsx-loader?harmony'], exclude: /node_modules/},
      {test: /\.css$/,    loader: cssExtractorPlugin.extract('style-loader', 'css-loader?sourceMap')},
      {test: /\.sass$/,   loader: cssExtractorPlugin.extract('style-loader', 'css!sass?indentedSyntax=sass&sourceMap')},
      {test: /\.scss$/,   loader: cssExtractorPlugin.extract('style-loader', 'css!sass?sourceMap')},
      {test: /\.md$/,     loader: 'html!markdown-it'}
    ]
  },
  devtool: 'sourcemap',
  'markdown-it': {
    preset: 'default',
    typographer: true
  },
  plugins: [
    cssExtractorPlugin,
    sharedPlugin,
    // NOTE:
    // This line is necessary if we are using WebpackDevServer as middleware.
    // It is not necessary if we are using the `webpack-dev-server --hot` on
    // command line as that will automatically add in the HotModuleReplacementPlugin
    // for us.
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}