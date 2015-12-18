'use strict';

var path = require('path');
var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');

config.ip = 'localhost';
config.port = 8080;
config.debug = true;
config.devtool = 'eval';
config.entry = {
  'webapp': [
    // For hot style updates
    'webpack/hot/dev-server',
    // The script refreshing the browser on none hot updates
    'webpack-dev-server/client?http://' + config.ip + ':' + config.port,
    './app/index.js'
  ]
};
config.module.loaders = [
  {test: /\.scss/, loader: 'style!css!autoprefixer?browsers=last 2 versions!sass?includePaths[]=' + bourbon}
].concat(config.module.loaders);

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new WebpackNotifierPlugin({title: 'Webpack'})
);

module.exports = config;
