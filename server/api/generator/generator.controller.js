'use strict';

var assign = require('lodash/object/assign');
var yeoman = require('yeoman-environment');
var fs = require('fs-extra');
var path = require('path');
var sh = require('shelljs');
var config = require('../../config/env');
var env = yeoman.createEnv();

/**
 * Get list of notifications
 */
exports.index = function(req, res) {
  var options = {};
  if (!req.body.moduleName) {
    return res.status(400).json({message: 'You must set application name correctly.'});
  }

  if (req.body.uuid) {
    options.uuid = req.body.uuid;
  }
  options.generatorName = req.body.moduleName;
  options.force = true;
  options.skipInstall = true;
  assign(options, req.body);

  env.lookup(function () {
    env.run('sanji-ui', options, function (err) {
      if (err) {
        console.log('Generator error:', err);
        return res.status(500);
      }
      var generatorPath = config.root + '/sanji-' + options.generatorName;
      var resourcePath = generatorPath + '/app/component/component.resource.json';
      if (fs.existsSync(resourcePath)) {
        var resource = fs.readJsonSync(resourcePath, {thorws: false});
        fs.removeSync(generatorPath + '/.yo-rc.json'); // Prevent generator root path to change
        if (!fs.existsSync(generatorPath + '/node_modules')) {
          sh.exec('cp -rf ' + config.root + '/tmp/node_modules ' + generatorPath, {async:true});
        }
        return res.status(200).json({uuid: resource.uuid});
      }
      else {
        fs.removeSync(generatorPath + '/.yo-rc.json');
        return res.status(500);
      }
    });
  });
};

exports.backup = function(req, res) {
  if (req.body.fields && req.body.moduleName) {
    var generatorPath = config.root + '/sanji-' + req.body.moduleName;
    var resourcePath = generatorPath + '/app/component/component.resource.json';
    if (fs.existsSync(resourcePath)) {
      var resource = fs.readJsonSync(resourcePath, {thorws: false});
      resource.fields = req.body.fields;
      fs.writeJsonSync(resourcePath, resource);
      return res.status(200).json(resource);
    }
    else {
      return res.status(500).json({message: 'Can not find project!'});
    }
  }
  else {
    return res.status(400).json({message: 'You must set application information correctly.'});
  }
};

exports.export = function(req, res, next) {
  if (req.body.fields && req.body.moduleName) {
    var generatorPath = config.root + '/sanji-' + req.body.moduleName;
    var resourcePath = generatorPath + '/app/component/component.resource.json';
    var downloadFileName = req.body.uuid + '.tar.gz';
    if (fs.existsSync(resourcePath)) {
      var resource = fs.readJsonSync(resourcePath, {thorws: false});
      resource.fields = req.body.fields;
      fs.writeJsonSync(resourcePath, resource);
      sh.cd(generatorPath);
      sh.exec('npm run build');
      return res.download(generatorPath + '/' + downloadFileName,
          downloadFileName,
          function(err) {
            if (err) return next(err);
          });
    }
    else {
      return res.status(500).json({message: 'Can not find project!'});
    }
  }
  else {
    return res.status(400).json({message: 'You must set application information correctly.'});
  }
};
