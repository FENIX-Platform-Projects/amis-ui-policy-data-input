define([
    'jquery',
    'backbone'
], function ($, Backbone) {

    var model = Backbone.Model.extend({

        urlRoot: '/policies',

        idAttribute: "policyId"

    });

    return model;

});