'use strict';
var Model = require('ampersand-model');

////
// PersonModel
module.exports = Model.extend({
	//urlRoot: '/api/persons',

	initialize: function() {
		this.fetch();
	},

	// Aqui declaramos explicitamente as propriedades
	// serve como um documentação
	props: {
		id: 'number',
		givenName: 'string',
		familyName: 'string',
		awesomeness: 'number'
	},

	derived: {
		fullName: {
			deps: ['givenName', 'familyName'],
			fn: function() {
				return this.givenName + ' ' + this.familyName;
			}
		},
		avatarUrl: {
			deps: ['givenName'],
			fn: function() {
				return 'http://robohash.org/' + this.givenName;
			}
		},
		viewUrl: {
			deps: ['id'],
			fn: function() {
				return '/users/' + this.id;
			}
		},
		editUrl: {
			deps: ['id'],
			fn: function() {
				return '/users/' + this.id + '/edit';
			}
		}
	}
});