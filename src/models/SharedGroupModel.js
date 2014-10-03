define([
    'jquery',
    'backbone'
], function ($, Backbone) {

    var model = Backbone.Model.extend({

        urlRoot: '/sharedgroups',

        idAttribute: "idSingle"

    });

    return model;

});