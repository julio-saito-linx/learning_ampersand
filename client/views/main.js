'use strict';
var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');

module.exports = View.extend({
	template: '<body><h1>Aprendendo Ampersand.js</h1><main role="page-container"></main></body>',

	autoRender: true,
	
	initialize: function() {
		this.listenTo(app.router, 'page', this.handleNewPage)
	},

	render: function() {
		//http://ampersandjs.com/docs#ampersand-view-renderwithtemplate
		this.renderWithTemplate();

		// getByRole => this.$el.find('[role=page-container]')
		var pageContainerElement = this.getByRole('page-container');
		
		// O ViewSwitcher funciona como o Marionet Layout/Regions
		this.pages = new ViewSwitcher(pageContainerElement);

		return this;
	},

	handleNewPage: function(page) {
		this.pages.set(page);
	}
});