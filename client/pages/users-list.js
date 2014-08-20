'use strict';
var View = require('ampersand-view');
var templates = require('../templates');
var UserView = require('../views/user');
var CollectionView = require('ampersand-collection-view');

module.exports = View.extend({
	template: templates.pages.users_list,
	
	autoRender: true,
	
	initialize: function() {
		setTimeout(function() {
			this.collection.fetch();
		}.bind(this), 2000);
		//this.collection.fetch();
	},

	subviews: {
		users:{
			waitFor: 'collection',
			role: 'users-list',
			prepareView: function() {
				return new CollectionView({
					el: this.el,
					collection: this.collection,
					view: UserView
				});
			}
		}
	}

	// render: function() {
	// 	this.renderWithTemplate();
	// 	this.renderCollection(this.collection, UserView, this.getByRole('users-list'));
	// }
});