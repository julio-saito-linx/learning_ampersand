'use strict';
var View = require('ampersand-view');
var UserFormView = require('../forms/user_form');
var templates = require('../templates');

//// ----------------------------------
// this             = UserEditPage
// this.model       = PersonModel
// this.collection  = PersonsCollection
// ------------------------------------

module.exports = View.extend({
    template: templates.pages.user_edit,

    initialize: function (opt) {
        ////
        // getOrFetch: pega um model de uma collection
        // se o item não estiver disponível, busca via AJAX
        this.collection.getOrFetch(opt.id, function (err, model) {
            if (err) {
                throw err;
            }

            this.model = model;

        }.bind(this));   // atenção para o escopo
    },

    subviews: {
        form: {
            role: 'user-form',
            waitFor: 'model',
            prepareView: function () {
                return new UserFormView({
                    el: this.el,
                    model: this.model,
                    submitCallback: function (data) {

                        // salva as alterações, é o mesmo que: 
                        // >> this.model.set(data);
                        // >> this.model.save();
                        this.model.save(data);

                        // volta para a lista de usuários
                        window.app.navigate('/users');

                    }.bind(this)
                });
            }
        }
    }
});