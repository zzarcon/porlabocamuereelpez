import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cartoon-face-component'],
  classNameBindings: ['isHover'],
  face: null,
  isHover: false,

  img: function() {
    var state = this.get('isHover') ? '_active' : '';

    return 'img/faces/' + this.get('face.name') + state + '.png';
  }.property('face.name', 'face.quote', 'isHover'),

  src: function() {
    return 'audio/' + this.get('face.name') + '_' + this.get('face.quote') + '.mp3';
  }.property('face.name', 'face.quote'),

  mouseEnter: function() {
    this.set('isHover', true);
  },

  mouseLeave: function() {
    this.set('isHover', false);
  }
});