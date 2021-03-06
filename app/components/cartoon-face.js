import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['cartoon-face-component'],
  classNameBindings: ['isHover', 'face.name', 'mouseEvents'],
  mouseEvents: true,
  face: null,
  isHover: false,
  autoplayDelay: 3000,
  autoplay: false,

  src: Ember.computed.alias('face.src'),
  
  audio: function() {
    return new Audio(this.get('src'));
  }.property('src'),

  activeImg: function() {
    return 'img/faces/' + this.get('face.name') + '_active.png';
  }.property('face.name'),

  disabledImg: function() {
    return 'img/faces/' + this.get('face.name') + '.png';
  }.property('face.name'),

  mouseEnter: function() {
    if (!this.get('mouseEvents')) return;

    this.play();
    this.set('isHover', true);
  },

  mouseLeave: function() {
    if (!this.get('mouseEvents')) return;

    this.pause();
    this.set('isHover', false);
  },

  click: function() {
    if (this.get('mouseEvents')) return;
    
    this.play();
  },

  play: function() {
    var audio = this.get('audio');
    if (!audio.paused) return;
    
    this.get('audio').play();
  },

  pause: function() {
    this.get('audio').pause();
    this.get('audio').currentTime = 0;
  },

  doAutoplay: function() {
    if (!this.get('autoplay')) return;
    Ember.run.later(this, this.play, this.get('autoplayDelay'));
  }.on('didInsertElement'),

  actions: {
    play: function() {
      this.play();
    }
  }
});