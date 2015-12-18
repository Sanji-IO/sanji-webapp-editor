'use strict';

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var bourbon = require('node-bourbon').includePaths;
var config = require('./webpack.config.js');
var pkg = require('./package.json');

config.devtool = 'source-map';
config.entry = {
  webapp: './app/index.js',
  vendors: ['angular', 'sanji-core-ui']
};

config.module.loaders = [
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style-loader', 'css!autoprefixer?browsers=last 2 versions!sass?includePaths[]=' + bourbon)
  }
].concat(config.module.loaders);

config.plugins.push(
  new ExtractTextPlugin('css/bundle.css'),
  new WebpackNotifierPlugin({title: 'Webpack'}),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new HtmlWebpackPlugin({
    version: pkg.version,
    template: 'client/index.html'
  }),
  new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
);
module.exports = config;
