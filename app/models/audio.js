import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  quote: attr('string'),

  src: function() {
    return 'audio/' + this.get('name') + '_' + this.get('quote') + '.mp3';
  }.property('name', 'quote')
});