define([
    'jquery',
    'backbone',
    'underscore',
    'models/CommodityModel',
    'text!templates/commodities/DetailsTemplate.html'
], function ($, Backbone, _, Model, DetailsTemplate) {

    var view = Backbone.View.extend({

        initialize: function (options) {

            this.el = options.el;

        },

        render: function (o) {
            var that = this;

            if (o) {
                if (o.id) {
                    this.commodityId = o.id;
                    var commodity = new Model({commodityId: o.id});
                    commodity.fetch({
                        success: function (c) {

                            var template = _.template(DetailsTemplate, {comm: c});
                            that.$el.html(template);
                        }
                    })
                }
            } else {
                this.$el.html(_.template(DetailsTemplate, {comm: null}));
            }

        }

    });

    return view;

});