/**
 * Main application routes
 */

'use strict';

var errors = require('./utils/errors');
var config = require('./config/env');

module.exports = function(app) {

  var apiPath = config.apiPath;
  // Insert routes below
  app.use(apiPath + '/generator', require('./api/generator'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
    .get(function(req, res) {
      var statusCode = 404;
      var result = { status: statusCode };
      res.status(statusCode).json(result);
    });

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(app.get('appPath') + '/index.html');
    });
};
