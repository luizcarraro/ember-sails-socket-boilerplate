// app/controllers/login.js
import Ember from 'ember';

export default Ember.Controller.extend({
	session: Ember.inject.service(),
	
  actions: {
  	logout: function () {
  		var that = this;
  		this.get('session').invalidate()
  			.then(function () {
  				that.transitionToRoute('application');
  		});
  	}
  }
});