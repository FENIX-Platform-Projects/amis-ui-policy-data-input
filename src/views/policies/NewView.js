define([
    'jquery',
    'backbone',
    'text!templates/policies/NewTemplate.html',
    'views/policies/PolicyDetailsView'

], function ($, Backbone, template, Details) {

    var view = Backbone.View.extend({

        initialize: function (options) {

            this.el = options.el;

        },

        render: function () {

            this.$el.html(template);

            this.policyDetails = new Details({
                el: "#policy-details"
            });

            this.policyDetails.render();

        }

    });

    return view;

});