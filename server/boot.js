'use strict';

var express = require('express');
var io = require('socket.io');

var logger = require('./utils/logger');
var config = require('./config/env');

var socketio;
var app = express();

require('./config/express')(app);

if ('development' === app.get('env')) {
  var proxyServer = require('./server.development')(app);
  socketio = io(proxyServer);
}

if ('production' === app.get('env')) {
  var http = require('http').Server(app);
  socketio = io(http);
}

require('./config/socketio')(socketio);
require('./routes')(app);

proxyServer.listen(config.port, config.ip, function () {
  logger.info('Express server listening on %d, in %s mode', config.port, app.get('env'));
});
