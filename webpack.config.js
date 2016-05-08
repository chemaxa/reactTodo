'use strict';
let path = require('path');
let webpack = require('webpack');
let dirName = path.resolve(__dirname,'./client/app');
console.log('DN: ',dirName);
module.exports = {
  entry: './client/app/app.js',
  output: { 
		path: dirName,
		filename: 'bundle.js',
		sourceMapFilename: '[file].map'
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
	devServer:{
		contentBase: __dirname+'/client/'
	}
};