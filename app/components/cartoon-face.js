import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cartoon-face-component'],
  classNameBindings: ['isHover'],
  face: null,
  isHover: false,

  audio: function() {
    return new Audio(this.get('src'));
  }.property('src'),

  img: function() {
    var state = this.get('isHover') ? '_active' : '';

    return 'img/faces/' + this.get('face.name') + state + '.png';
  }.property('face.name', 'face.quote', 'isHover'),

  src: function() {
    return 'audio/' + this.get('face.name') + '_' + this.get('face.quote') + '.mp3';
  }.property('face.name', 'face.quote'),

  mouseEnter: function() {
    this.play();
    this.set('isHover', true);
  },

  mouseLeave: function() {
    this.pause();
    this.set('isHover', false);
  },

  click: function() {
    this.play();
  },

  play: function() {
    var audio = this.get('audio');
    if (!audio.paused) {
      return;
    }

    this.get('audio').play();
  },

  pause: function() {
    this.get('audio').pause();
    this.get('audio').currentTime = 0;
  }
});