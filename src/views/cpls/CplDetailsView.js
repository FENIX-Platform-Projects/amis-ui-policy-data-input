define([
    'jquery',
    'backbone',
    'underscore',
    'models/CplModel',
    'text!templates/cpls/DetailsTemplate.html'
], function ($, Backbone, _, CplModel, DetailsTemplate) {

    var view = Backbone.View.extend({

        initialize: function (options) {

            this.el = options.el;

        },

        render: function (o) {
            var that = this;

            if (o) {
                if (o.id) {
                    this.cplId = o.id;
                    var cpl = new CplModel({cplId: o.id});
                    cpl.fetch({
                        success: function (c) {

                            var template = _.template(DetailsTemplate, {cpl: c});
                            that.$el.html(template);
                        }
                    })
                }
            } else {
                this.$el.html(_.template(DetailsTemplate, {cpl: null}));
            }
        }

    });

    return view;

});