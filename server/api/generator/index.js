'use strict';

var express = require('express');
var controller = require('./generator.controller');
var config = require('../../config/env');

var router = express.Router();

router.post('/',  controller.index);
router.put('/backup',  controller.backup);
router.put('/export',  controller.export);

module.exports = router;
