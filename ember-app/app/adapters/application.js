import DS from 'ember-data';
import config from '../config/environment';
// import SailsRESTAdapter from 'ember-data-sails/adapters/sails-rest';

export default DS.RESTAdapter.extend({
// export default SailsRESTAdapter.extend({
  coalesceFindRequests: true,
  host: config.hostUrl,

  shouldReloadAll: function () {
    return true;
  }

});