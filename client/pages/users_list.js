'use strict';
var View = require('ampersand-view');
var templates = require('../templates');
var UserView = require('../views/user');

//// ----------------------------------
// this             = UsersListPage
// this.collection  = PersonsCollection
// ------------------------------------

module.exports = View.extend({
	template: templates.pages.users_list,
	
	autoRender: true,
	
	initialize: function() {
		if(!window.app.cachedCollection){
			this.collection.fetch();
			window.app.cachedCollection = this.collection;
		}
	},

	render: function() {
		this.renderWithTemplate();
		this.renderCollection(window.app.cachedCollection, UserView, this.getByRole('users_list'));
	}
});