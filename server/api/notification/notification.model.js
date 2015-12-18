'use strict';

var Notification;
var MAX_NOTIFICATION_NUM = 255;

module.exports = NotificationModel;

function NotificationModel(sequelize, DataTypes) {
  Notification = sequelize.define('Notification', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    i18n: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    unread: { type: DataTypes.BOOLEAN, defaultValue: true },
    message: { type: DataTypes.TEXT },
    variables: {
      type: DataTypes.TEXT,
      get: function() {
        return JSON.parse(this.getDataValue('variables'));
      },
      set: function(v) {
        var tmp = null;
        try {
          tmp = JSON.stringify(v)
        } catch(error) {
          throw new Error('Notification model json stringify error.');
        }
        return this.setDataValue('variables', tmp);
      }
    }
  }, {
    hooks: {
      beforeCreate: function() {
        return Notification.findAll()
          .then(function(results) {
            if (MAX_NOTIFICATION_NUM === results.length) {
              results[MAX_NOTIFICATION_NUM - 1].destroy({force: true});
            }
          });
      }
    }
  });

  return Notification;
}
