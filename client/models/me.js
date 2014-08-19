'use strict';
var Model = require('ampersand-model');

module.exports = Model.extend({
	url: '/api/me',

	initialize: function() {
		this.fetch();
	},

	// Aqui declaramos explicitamente as propriedades
	// serve como um documentação
	props: {
		id: 'string',
		givenName: 'string',
		familyName: 'string',
		email: 'string'
	},

	derived: {
		fullName: {
			deps: ['givenName', 'familyName'],
			fn: function() {
				return this.givenName + ' ' + this.familyName;
			}
		}
	}
});