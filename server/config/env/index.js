'use strict';

var _ = require('lodash');

/**
 * Load environment configuration
 */
module.exports = _.merge(
    require('./config.all.js'),
    require('./config.' + process.env.NODE_ENV + '.js') || {});

