
import Ember from 'ember';

export default Ember.Controller.extend({
	model: null,
  actions: {
    save: function() {
    	var credentials = this.getProperties('title', 'price');
    	console.log(credentials);
    	this.set('model', this.store.createRecord('product', credentials));
    	this.get('model').save().then(function () {
    		alert('Salvo com sucesso');
    	})
    	.catch(function (err) {
    		alert('nao foi possivel salvar');
    	})
    }
  }
});