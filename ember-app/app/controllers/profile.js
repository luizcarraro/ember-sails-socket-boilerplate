/* global io */
import Ember from 'ember';

export default Ember.Controller.extend({
	// socketIOService: Ember.inject.service('socket-io'),
	cookies: Ember.inject.service(),

	init: function() {
		console.log('Controller funcionou');
		// const socket = this.get('socketIOService').socketFor('http://localhost:1337/');
		//   socket.on('connect', function () {
		//   	console.log('Socket Connected!!!! \o/');
		//   }, this);


		//
		//
		// console.log('localStorage', localStorage);
		
		// this.get('cookie').getCookie('my-key').then(function (data) {
		// 	console.log('Data: ', data);
		// });
		// let cookieService = this.get('cookies')
		// console.log('cookie', cookieService );

    var localStorageKey = 'ember_simple_auth:session';
    // console.log('localStorageKey', localStorageKey);
    // console.log('No parse', localStorage[localStorageKey]);
    // console.log('Parsed: ', JSON.parse(localStorage[localStorageKey]));
    // var token = JSON.parse(localStorage[localStorageKey]).authenticated.token;	
    // console.log('token', token);	

		var sio = io('http://localhost:1337/');
		// console.log('sio: ', sio);
		sio.connect();

		sio.on('connect', function() {
			console.log('Socket Connected!!!! o/');

		});

		sio.on('message', function (data) {
		  	console.log('Message: ', data.message);
		  	// io.socket.post('/posts', { message: 'Got it!' });
		  });
		// sio.socket.post('/post', function gotResponse(body, response) {
  // 		console.log('Server responded with status code ' + response.statusCode + ' and data: ', body);
		// })

	},
	actions: {

	}
});