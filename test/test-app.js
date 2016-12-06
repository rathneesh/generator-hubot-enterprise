/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');
var os = require('os');

describe('hubot:app', function () {
  before(function () {
    this.timeout(1200000);
    var myDir = path.join(os.tmpdir(), './temp-test');
    console.log(myDir);
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(myDir)
      .withOptions({ 'defaults': true })
      .then(function(dir) {
        console.log('Success')
      })
      .catch(function(e) {
        console.log(e);
      })
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
