/**
   * Express configuration
 */

'use strict';

var path = require('path');

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var passport = require('passport');

var config = require('./env');
var logger = require('../utils/logger');

module.exports = function(app) {
  var env = app.get('env');

  app.disable('x-powered-by');
  app.set('views', config.root + '/server/views');
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser());
  app.use(passport.initialize());

  if ('production' === env) {
    app.set('appPath', config.root + '/public');
    app.use(favicon(path.join(config.root, 'public', 'favicon.ico')));
    app.use(express.static(path.join(config.root, 'public')));
    app.use(morgan('common'));
  }

  if ('development' === env || 'test' === env) {
    app.set('appPath', config.root + '/client');
    app.use(express.static(path.join(config.root, 'client')));
    app.use(morgan('dev', {stream: logger.stream}));
  }

  app.use(errorHandler()); // Error handler - has to be last
};
