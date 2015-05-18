import Ember from 'ember';
import data from 'porlabocamuereelpez/data';

export default Ember.Route.extend({
  beforeModel: function() {
    this.get('store').pushPayload('audio', data);
  },

  model: function() {
    return this.get('store').all('audio');
  }
});