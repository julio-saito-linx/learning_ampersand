'use strict';
var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.pages.person_detail,

    autoRender: true,

    initialize: function () {
        console.log(arguments);
    }
});