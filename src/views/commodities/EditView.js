define([
    'jquery',
    'backbone',
    'text!templates/commodities/EditTemplate.html',
    'views/commodities/CommodityDetailsView'

], function ($, Backbone, template, Details) {

    var view = Backbone.View.extend({

        initialize: function (options) {

            this.el = options.el;

        },

        render: function (o) {

            this.$el.html(template);

            this.commodityDetails = new Details({
                el: "#commodity-details"
            });

            this.commodityDetails.render({id: o.id});

        }

    });

    return view;

});