// app/controllers/login.js
import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticateSession: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials)
      .then( () => {
      	console.log('Login successfull.');
      	this.transitionTo('profile');
      })
      .catch( (err) => {
      	alert(err);
      });
    }
  }
});