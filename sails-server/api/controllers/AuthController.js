/**
 * AuthController
 *
 * @module      :: Controller
 * @description	:: Provides the base authentication
 *                 actions used to make waterlock work.
 *
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').waterlocked({
  /* e.g.
    action: function(req, res){
  
    }
  */
 findOne: function (req, res) {
 	return Auth.findOne(req.params.id).then(function (auth) {
 		return res.ok({ auth: auth});
 	});
 }

});