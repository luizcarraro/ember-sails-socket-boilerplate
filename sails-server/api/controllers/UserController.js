/**
 * UserController.js 
 * 
 * @module      :: Controller
 * @description :: Provides the base user
 *                 actions used to make waterlock work.
 *                 
 * @docs        :: http://waterlock.ninja/documentation
 */

module.exports = require('waterlock').actions.user({
  /* e.g.
    action: function(req, res){
  
    }
  */
 
 find: function (req, res) {
 	return User.find().then(function (users) {
 		return res.ok({users: users});
 	})
 }
});