'use strict';
let path = require('path');
let webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:1337',
    'webpack/hot/only-dev-server',
    './client/app/index'
  ],
  output: { 
    path: path.join(__dirname, '/client/assets/js'),
    filename: 'bundle.js',
    publicPath: '/assets/js'
	},
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot','babel'],
        exclude: /node_modules/,
        include: path.join(__dirname, '/client/app')
      }
    ]
  },
};