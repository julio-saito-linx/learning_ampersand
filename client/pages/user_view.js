'use strict';
var View = require('ampersand-view');
var templates = require('../templates');

//// ----------------------------------
// this             = UserViewPage
// this.model       = PersonModel
// this.collection  = PersonsCollection
// ------------------------------------

module.exports = View.extend({
    template: templates.pages.user_view,

    autoRender: true,

    bindings: {
        'model.avatarUrl': {
            type: 'attribute',
            name: 'src',
            role: 'user_avatar'
        },

        'model.fullName': {
            type: 'text',
            name: 'text',
            role: 'user_fullname'
        },

        // viewUrl: [Person] Models's derived property
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

    initialize: function (opt) {

        ////
        // getOrFetch: pega um model de uma collection
        // se o item não estiver disponível, busca via AJAX
        this.collection.getOrFetch(opt.id, function (err, model) {

            if (err){
                throw err;    
            }

            this.model = model;

        }.bind(this));
    }
});