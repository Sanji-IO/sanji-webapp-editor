'use strict';

var Webpack = require('webpack');
var path = require('path');
var httpProxy = require('http-proxy');
var http = require('http');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('../webpack.dev');
var envConfig = require('./config/env');
var logger = require('./utils/logger');

module.exports = function (app) {
  startWebpackBundler();
  return startProxy(app);
};

function startProxy(app) {
  var proxy = httpProxy.createProxyServer({
    changeOrigin: true,
    ws: true
  });

  // We need to use basic HTTP service to proxy
  // websocket requests from webpack
  var proxyServer = http.createServer(app);
  // Any requests to localhost:3000/build is proxied
  // to webpack-dev-server
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + webpackConfig.ip + ':' + webpackConfig.port
    });
  });
  app.all('/socket.io*', function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + webpackConfig.ip + ':' + webpackConfig.port
    });
  });
  app.all('/hot-update.js(on)?$', function (req, res) {
    proxy.web(req, res, {
      target: 'http://' + webpackConfig.ip + ':' + webpackConfig.port
    });
  });

  // It is important to catch any errors from the proxy or the
  // server will crash. An example of this is connecting to the
  // server when webpack is bundling
  proxy.on('error', function(e) {
    // Just catch it
  });

  proxyServer.on('upgrade', function (req, socket, head) {
    proxy.ws(req, socket, head);
  });

  return proxyServer;
}

function startWebpackBundler() {
  // First we fire up Webpack an pass in the configuration we
  // created
  var bundleStart = null;
  var compiler = Webpack(webpackConfig);

  // We give notice in the terminal when it starts bundling and
  // set the time it started
  compiler.plugin('compile', function() {
    logger.info('Bundling...');
    bundleStart = Date.now();
  });

  // We also give notice when it is done compiling, including the
  // time it took. Nice to have
  compiler.plugin('done', function() {
    logger.info('Bundled in ' + (Date.now() - bundleStart) + 'ms!');
  });

  var bundler = new WebpackDevServer(compiler, {

    // We need to tell Webpack to serve our bundled application
    // from the build path. When proxying:
    // http://localhost:3000/build -> http://localhost:8080/build
    publicPath: '/build/',

    // Configure hot replacement
    hot: true,

    // The rest is terminal configurations
    quiet: false,
    // inline: true,
    noInfo: true,
    stats: {
      colors: true
    }
  });

  // We fire up the development server and give notice in the terminal
  // that we are starting the initial bundle
  bundler.listen(webpackConfig.port, webpackConfig.ip, function () {
    logger.info('Bundling project, please wait...');
  });
}
