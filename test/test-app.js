/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');
// var fs = require('fs-extra');

describe('hubot:app', function () {
  before(function () {
    this.timeout(1200000);
    var myDir = path.join(os.tmpdir(), './temp-test');
    console.log(myDir);
    return helpers.run(path.join(__dirname, '../generators/app'))
      // .inTmpDir(function(dir) {
      //   console.log('tmp dir', dir);        
      // })
      .inDir(myDir)
      .withOptions({ 'defaults': true })
      .then(function(dir) {
        console.log(dir);
        console.log('Success')
      })
      .catch(function(e) {
        console.log('error');
        console.log(e);
      })
      // .on('error', function(e) {
      //   done(e);
      // })
      // .on('ready', function() {
      //   done();
      // })
      // .on('end', function() {
      //   done();
      // });
  });

  it('creates files', function () {
    
    assert.file([
      'bin/hubot',
      'bin/hubot.cmd',
      'Procfile',
      'README.md',
      'external-scripts.json',
      // 'hubot-scripts.json',
      '.gitignore',
      'package.json',
      // 'scripts/example.coffee',
      '.editorconfig',
    ]);
  });
});
