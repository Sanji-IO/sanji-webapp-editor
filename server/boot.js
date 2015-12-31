'use strict';

var express = require('express');
var io = require('socket.io');
var sh = require('shelljs');
var fs = require('fs-extra');

var logger = require('./utils/logger');
var config = require('./config/env');

var socketio;
var app = express();

require('./config/express')(app);

if ('development' === app.get('env')) {
  var proxyServer = require('./server.development')(app);
  socketio = io(proxyServer);
  if (!fs.existsSync(config.root + '/tmp/node_modules')) {
    sh.cd(config.root + '/tmp');
    sh.exec('npm i --silent', {async:true, silent: false});
  }
}

if ('production' === app.get('env')) {
  var http = require('http').Server(app);
  socketio = io(http);
  if (!fs.existsSync(config.root + '/tmp/node_modules')) {
    sh.cd(config.root + '/tmp');
    sh.exec('npm i --silent', {async:true, silent: false});
  }
}

require('./config/socketio')(socketio);
require('./routes')(app);

proxyServer.listen(config.port, config.ip, function () {
  logger.info('Express server listening on %d, in %s mode', config.port, app.get('env'));
});
