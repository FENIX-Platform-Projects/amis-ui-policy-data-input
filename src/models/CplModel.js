define([
    'jquery',
    'backbone'
], function ($, Backbone) {

    var model = Backbone.Model.extend({

        urlRoot: '/cpls',

        idAttribute: "cplId"

    });

    return model;

});