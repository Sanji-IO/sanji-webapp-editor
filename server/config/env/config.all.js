'use strict';

var path = require('path');

// All configurations will extend these options
// ============================================
module.exports = {
  env: process.env.NODE_ENV,
  apiPath: '/api/v1',

  // Root path of server
  root: path.normalize(__dirname + '/../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: '!m@xa#'
  }
};
