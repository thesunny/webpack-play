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
    'entry': './fe/entry.jsx',
    'coffee-play': './fe/coffee-play.coffee',
    'shared': ['jquery', 'react']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.coffee$/, loader: 'coffee-jsx-loader'},
      {test: /\.jsx$/,    loader: 'jsx-loader?harmony'},
      {test: /\.css$/,    loader: cssExtractorPlugin.extract('style-loader', 'css-loader?sourceMa p')},
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
    sharedPlugin
  ]
}