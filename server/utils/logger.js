'use strict';

var bunyan = require("bunyan");
var logger = bunyan.createLogger({name: "webapp"});

module.exports = logger;
module.exports.stream = {
  write: function(message, encoding) {
    logger.info(message.replace(/(\r\n|\n|\r)/gm, '').trim());
  }
};
