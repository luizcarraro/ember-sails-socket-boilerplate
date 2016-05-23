import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  phone: DS.attr('string'),
  company: DS.attr('string'),
  email: DS.attr('string'),
  auth: DS.belongsTo('auth', { async: true})
});
