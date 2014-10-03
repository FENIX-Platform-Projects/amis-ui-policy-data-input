define([
    'jquery',
    'backbone',
    'text!templates/policies/EditTemplate.html',
    'views/policies/PolicyDetailsView'
], function ($, Backbone, template, Details) {

    var view = Backbone.View.extend({

        initialize: function (options) {

            this.el = options.el;

        },

        render: function (o) {

            this.$el.html(template);

            this.policyDetails = new Details({
                el: "#policy-details"
            });

            console.log("ID " + o.id);
            this.policyDetails.render({ id: o.id });

        }

    });

    return view;

});