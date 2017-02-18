'use strict';
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var nodemon = require('nodemon');

new WebpackDevServer(webpack(config), {
  contentBase: './client',
  publicPath: config.output.publicPath,
  hot: true,
  inline: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(1337, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:1337/');
});

nodemon({
  script: 'server/server.js',
  ext: 'js',
  ignore: [
    '.git',
    'node_modules/**/node_modules'
  ],
  watch: [
    'server'
  ]
});

nodemon.on('start', function () {
  console.log('Api server has started at http://localhost:3000');
}).on('quit', function () {
  console.log('App has quit');
}).on('restart', function (files) {
  console.log('App restarted due to: ', files);
});