define([
    'jquery',
    'backbone',
    'underscore',
    'models/PolicyModel',
    'text!templates/policies/DetailsTemplate.html'
], function ($, Backbone, _, CplModel, DetailsTemplate) {

    var view = Backbone.View.extend({

        initialize: function (options) {

            this.el = options.el;

        },

        render: function (o) {

            var that = this;

            if (o) {
                if (o.id) {
                    var policy = new CplModel({policyId: o.id});
                    this.policyId = o.id;
                    policy.fetch({
                        success: function (p) {

                            var template = _.template(DetailsTemplate, { p: p});
                            that.$el.html(template);
                        }
                    })
                }
            } else {
                this.$el.html(_.template(DetailsTemplate, { p: null}));
            }

        }

    });

    return view;

});