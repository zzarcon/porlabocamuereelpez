import Ember from 'ember';

export default Ember.View.extend({
  elementId: "application-content",
  classNameBindings: ['isLoaded'],
  isLoaded: false,
  delay: 4000,

  loadApp: function() {
    Em.run.later(this, function() {
      $('#application-loader').remove();
      this.set('isLoaded', true);
    }, this.get('delay'));
  }.on('didInsertElement')
});