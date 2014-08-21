'use strict';
var View = require('ampersand-view');
var UserFormView = require('../forms/user_form');
var templates = require('../templates');

//// ----------------------------------
// this             = UserCretePage
// this.model       = PersonModel
// this.collection  = PersonsCollection
// ------------------------------------

module.exports = View.extend({
	template: templates.pages.user_create,

	subviews: {
		form: {
			role: 'user-form',
			prepareView: function() {
				return new UserFormView({
					el: this.el,
					submitCallback: function(data) {
						
						this.collection.create(data, {
							success: function() {
								window.app.router.history.navigate('/users', { trigger:true });
							},
							error: function(err) {
								throw err;
							}
						});
						
					}.bind(this)
				});
			}
		}
	}
});