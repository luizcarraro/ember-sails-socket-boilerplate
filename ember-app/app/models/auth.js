import Model from 'ember-data/model';

export default Model.extend({
	password: DS.attr('string'),
	email: DS.attr('string')
});