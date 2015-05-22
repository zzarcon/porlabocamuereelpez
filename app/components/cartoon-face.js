import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cartoon-face-component'],
  classNameBindings: ['isHover', 'face.name'],
  face: null,
  isHover: false,
  audio: null,

  //TODO: Make this responsive, because right we are preloading all the audios at the begining...
  preloadAudio: function() {
    this.set('audio', new Audio(this.get('src')));
  }.on('didInsertElement'),

  activeImg: function() {
    return 'img/faces/' + this.get('face.name') + '_active.png';
  }.property('face.name'),

  disabledImg: function() {
    return 'img/faces/' + this.get('face.name') + '.png';
  }.property('face.name'),

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