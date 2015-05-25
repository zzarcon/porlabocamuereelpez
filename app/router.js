import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,

  /**
   * Send info to Google Analytics
   * @return {Object}
   */
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
      page: this.get('url'),
      title: this.get('url')
    });
  }.on('didTransition')
});

export default Router.map(function() {
  this.route('face', {path: "careto/:quote"});
});