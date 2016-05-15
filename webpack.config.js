'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './client/app/index'
  ],
  output: { 
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/'
	},
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot','babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, '/client/app')
      }
    ]
  },
};