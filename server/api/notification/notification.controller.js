'use strict';

var Notification = require('../../config/db').Notification;

/**
 * Get list of notifications
 */
exports.index = function(req, res) {
  Notification.findAll()
  .then(function(notifications) {
    return res.status(200).json(notifications);
  })
  .catch(function(err) {
    return res.status(500).send(err);
  });
};

exports.update = function(req, res) {
  Notification.findAll()
  .then(function(notifications) {
    notifications.forEach(function(notification) {
      notification.update({unread: false});
    });
    return res.status(200).json(notifications);
  })
  .catch(function(err) {
    return res.status(500).send(err);
  });
};
