export default Router;

import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('procedures');
  this.route('protected');
  this.route('profile');
  this.route('product', function() {
    this.route('new');
  });
});

export default Router;
