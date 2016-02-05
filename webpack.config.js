'use strict';

var path = require('path');
var webpack = require('webpack');
var pkg = require('./package');
var nodeRoot = path.join(__dirname, 'node_modules');
var appRoot = path.join(__dirname, 'client');
var NODE_ENV = process.env.NODE_ENV;
var config = {
  context: appRoot,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // Everything related to Webpack should go through a build path,
    // localhost:3000/build. That makes proxying easier to handle
    publicPath: '/build/',
    chunkFilename: 'production'===NODE_ENV ? '[chunkhash].chunk.js' : '[id].chunk.js'
  },
  resolve: {
    root: [nodeRoot],
    alias: {
      'angular-material.css': nodeRoot + '/angular-material/angular-material.css',
      'angular-material-icons.css': nodeRoot + '/angular-material-icons/angular-material-icons.css',
      'angular-material-data-table.css': nodeRoot + '/angular-material-data-table/dist/md-data-table.css',
      'toastr.scss': nodeRoot + '/toastr/toastr.scss',
      'svg-morpheus': nodeRoot + '/svg-morpheus/compile/unminified/svg-morpheus.js'
    },
    extensions: ['', '.js', '.json', 'html', 'scss', 'css']
  },
  module: {
    preLoaders: [
      {test: /\.js$/, loader: "eslint", exclude: /(node_modules)/}
    ],
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate!babel', exclude: /(node_modules)/},
      {
        test: /\.js$/,
        loader: 'babel?optional[]=runtime&stage=0',
        include: [
          /(angular-sanji-window)/,
          /(sanji-core-ui)/,
          /(sanji-utils-ui)/,
          /(sanji-logger-ui)/,
          /(sanji-exception-ui)/,
          /(sanji-socket-ui)/,
          /(sanji-router-ui)/,
          /(sanji-auth-ui)/,
          /(sanji-navbar-ui)/,
          /(sanji-sidebar-ui)/,
          /(sanji-notification-ui)/,
          /(sanji-cpu-ui)/,
          /(sanji-memory-ui)/,
          /(sanji-disk-ui)/,
          /(sanji-device-info-ui)/,
          /(sanji-ethernet-ui)/,
          /(sanji-cellular-ui)/,
          /(sanji-serial-ui)/,
          /(sanji-time-ui)/
        ]
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: [
          /(sanji-navbar-ui)/,
          /(sanji-core-ui)/,
          /(sanji-navbar-ui)/,
          /(sanji-sidebar-ui)/,
          /(sanji-notification-ui)/,
          /(sanji-cpu-ui)/,
          /(sanji-memory-ui)/,
          /(sanji-disk-ui)/,
          /(sanji-device-info-ui)/,
          /(sanji-ethernet-ui)/,
          /(sanji-cellular-ui)/,
          /(sanji-serial-ui)/,
          /(sanji-time-ui)/
        ]
      },
      { test: require.resolve("jquery"), loader: "expose?$!expose?jQuery" },
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
      {
        test: /\.html$/,
        loader: 'ng-cache?prefix=[dir]/[dir]',
        include: [
          /(angular-sanji-window)/,
          /(sanji-core-ui)/,
          /(sanji-navbar-ui)/,
          /(sanji-sidebar-ui)/,
          /(sanji-notification-ui)/,
          /(sanji-cpu-ui)/,
          /(sanji-memory-ui)/,
          /(sanji-disk-ui)/,
          /(sanji-device-info-ui)/,
          /(sanji-ethernet-ui)/,
          /(sanji-cellular-ui)/,
          /(sanji-serial-ui)/,
          /(sanji-time-ui)/
        ]
      },
      {test: /\.html$/, loader: 'ng-cache?prefix=[dir]/[dir]', exclude: /(node_modules)/},
      {test: /\.css$/, loader: 'style!css!autoprefixer?browsers=last 2 versions'},
      {test: /\.(png|jpg|gif|jpeg)$/, loader: 'url?limit=8192&name=images/[hash].[ext]'},
      {test: /\.(woff|woff2)$/, loader: "url?limit=10000&minetype=application/font-woff"},
      {test: /\.(ttf|eot|svg)$/, loader: "file"}
    ],
    noParse: []
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      __TEST__: 'test' === NODE_ENV,
      __DEV__: 'development' === NODE_ENV,
      __RELEASE__: 'production' === NODE_ENV,
      __VERSION__:  JSON.stringify(pkg.version)
    }),
    new webpack.NoErrorsPlugin()
  ]
};

module.exports = config;
