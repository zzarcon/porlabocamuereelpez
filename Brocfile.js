/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    exclude: ['img/faces', 'img/faces/aguirre.png']
  }
});

module.exports = app.toTree();