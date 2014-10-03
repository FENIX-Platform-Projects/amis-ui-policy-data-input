define([
    'jquery',
    'backbone'
], function ($, Backbone) {

    var model = Backbone.Model.extend({

        urlRoot: '/commodities',

        idAttribute: "commodityId"

    });

    return model;

});