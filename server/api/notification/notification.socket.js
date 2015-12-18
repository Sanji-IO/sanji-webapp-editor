/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Notification = require('../../config/db').Notification;

exports.register = function(socket) {
  Notification.hook('afterCreate', function (notification) {
    create(socket, notification);
  });
}

function create(socket, notification, cb) {
  socket.emit('sj:notification:create', notification);
}
