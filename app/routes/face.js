import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    return this.get('store').all('audio').findBy('quote', params.quote);
  },
  setupController: function(controller, model, transition) {
    var shouldTransition = transition.queryParams.transition === false ? false : true;

    controller.setProperties({
      shouldTransition: shouldTransition,
      model: model
    });
  }
});