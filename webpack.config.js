var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './public/index.js',
  output: {
    path: __dirname,
    filename: '/public/bundle/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets:["es2015", "react"]
        }
      }
    ]
  }
};