import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true,

  audios: function() {
    return this.get('model').map(function(audio) {
      return {
        src: audio.get('src'),
        loaded: false
      };
    });
  }.property('model.length'),

  preloadAudios: function() {
    var audios = this.get('audios');
    if (!audios.get('length')) return;

    this.loadAudios();
  }.observes('audios.length').on('init'),

  loadAudios: function() {
    var firstUnloaded = this.get('audios').filterBy('loaded', false).get('firstObject');
    if (!firstUnloaded) return;

    var audio = new Audio(firstUnloaded.src);
    console.log('load', firstUnloaded.src);

    audio.oncanplaythrough = function() {
      firstUnloaded.loaded = true;
      this.loadAudios();
    }.bind(this);  
  }
});