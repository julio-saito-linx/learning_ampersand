'use strict';
var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.user,

    bindings: {
        'model.fullName': {
            type: 'text',
            role: 'user-fullName-item'
        },

        'model.viewUrl': {
            type: 'attribute',
            name: 'href',
            role: 'action-user-view'
        },

        'model.editUrl': {
            type: 'attribute',
            name: 'href',
            role: 'action-user-edit'
        },

    },

    events: {
        'click [role=action-delete-user]': 'handleDeleteClick'
    },

    handleDeleteClick: function () {
        this.model.destroy();
    }
});