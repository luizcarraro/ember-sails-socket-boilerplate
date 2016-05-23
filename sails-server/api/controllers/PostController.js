/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	// create: function (req, res) {
	// 	sails.sockets.blast('message', {message: req.body.message});
	// 	return res.ok();
	// },
	restricted: function (req, res) {
		return res.ok('Se vc pode ver isso vc esta autenticado')
	},
	open: function (req, res) {
		return res.ok('Esta ação é publica');
	},
	jwt: function (req, res) {
		return res.ok('Voce tem um json webtoken');
	}
};

