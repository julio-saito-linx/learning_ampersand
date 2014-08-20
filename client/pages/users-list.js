'use strict';
var View = require('ampersand-view');
var templates = require('../templates');
var UserView = require('../views/user');

module.exports = View.extend({
	template: templates.pages.users_list,
	
	autoRender: true,
	
	initialize: function() {
		this.collection.fetch();
	},

	render: function() {
		this.renderWithTemplate();
		this.renderCollection(this.collection, UserView, this.getByRole('users-list'));
	}
});