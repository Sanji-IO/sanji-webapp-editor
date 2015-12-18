'use strict';

var express = require('express');
var controller = require('./notification.controller');
var config = require('../../config/env');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.isAuthenticated(), controller.index);
router.put('/', auth.isAuthenticated(), controller.update);

module.exports = router;
