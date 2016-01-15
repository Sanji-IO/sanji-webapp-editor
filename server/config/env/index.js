'use strict';

var merge = require('lodash/merge');

/**
 * Load environment configuration
 */
module.exports = merge(
    require('./config.all.js'),
    require('./config.' + process.env.NODE_ENV + '.js') || {});

