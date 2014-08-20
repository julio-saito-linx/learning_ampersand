'use strict';
var Model = require('ampersand-model');

module.exports = Model.extend({
	url: '/api/1',

	initialize: function() {
		this.fetch();
	},

	// Aqui declaramos explicitamente as propriedades
	// serve como um documentação
	props: {
		id: 'number',
		givenName: 'string',
		familyName: 'string'
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