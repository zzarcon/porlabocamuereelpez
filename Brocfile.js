/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  fingerprint: {
    exclude: ['img/faces', 'img/faces/aguirre.png']
  }
});

app.import('bower_components/ember-backdoor/backdoor.js');

module.exports = app.toTree();