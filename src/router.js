/*global define, require*/
define([
    'backbone',
    './AppView'
], function (Backbone, AppView) {

    var that;

    // Extends Backbone.Router
    var router = Backbone.Router.extend({

        // The Router constructor
        initialize: function () {

            this.appView = AppView;

            // Tells Backbone to start watching for hashchange events
            Backbone.history.start();

        },

        routes: {
            //CPLs
            'cpls/new(/)': 'newCpl',
            'cpls/:id(/)': "editCpl",
            'cpls(/)(:policyId)(/)': 'listCpls',

            //Policies
            'policies/new(/)': 'newPolicies',
            'policies/:id(/)': 'editPolicies',
            'policies(/)': 'listPolicies',

            //Commodities
            'commodities/new(/)': 'newCommodity',
            'commodities/:id(/)': 'editCommodity',
            'commodities(/)(:policyId)(/)': 'listCommodities',

            //Shared Group
            'sharedgroups/new(/)': 'newSharedGroup',
            'sharedgroups/:id(/)': 'editSharedGroup',
            'sharedgroups(/)(:policyId)(/)': 'listSharedGroup',

            // Default
            '': 'default'
        },

        //CPLs callbacks
        listCpls: function (policyId) {

            var that = this;

            require(['views/cpls/ListView'], function (ListCplsView) {

                that.appView.clearView();

                var listCplsView = new ListCplsView({
                    el: '#content',
                    policyId: policyId,
                    router: that
                });

                that.appView.showView(listCplsView);

            });

        },

        editCpl: function (id) {
            console.log("editCpl con id: " + id);

            require(['views/cpls/EditView'], function (EditCplView) {

                that.appView.clearView();

                var editCplView = new EditCplView({
                    el: '#content',
                    router: that
                });

                that.appView.showView(editCplView, {id: id});

            });

        },

        newCpl: function () {
            console.log("newCpl")

            require(['views/cpls/NewView' ], function (NewCplView) {

                that.appView.clearView();

                var newCplView = new NewCplView({
                    el: '#content',
                    router: that
                });

                that.appView.showView(newCplView);
            });

        },

        //Policies callbacks
        listPolicies: function () {
            console.log("listPolicies")

            require(['views/policies/ListView'], function (ListPoliciesView) {

                that.appView.clearView();

                var listPoliciesView = new ListPoliciesView({
                    el: '#content',
                    router: that
                });

                that.appView.showView(listPoliciesView);

            });

        },

        editPolicies: function (id) {
            console.log("editPolicies con id: " + id)

            require(['views/policies/EditView'], function (EditPolicyView) {

                that.appView.clearView();

                var editPolicyView = new EditPolicyView({
                    el: '#content',
                    router: that
                });

                that.appView.showView(editPolicyView, {id: id});

            });

        },

        newPolicies: function () {
            console.log("newPolicies")

            require(['views/policies/NewView'], function (NewPolicyView) {

                that.appView.clearView();

                var newPolicyView = new NewPolicyView({
                    el: '#content',
                    router: that
                });

                that.appView.showView(newPolicyView);

            });

        },

        //Commodities callbacks
        listCommodities: function (policyId) {
            console.log("listCommodities")

            require(['views/commodities/ListView'], function (ListCommoditiesView) {
                that.appView.clearView();

                var listCommoditiesView = new ListCommoditiesView({
                    el: "#content",
                    policyId: policyId,
                    router: that
                });

                that.appView.showView(listCommoditiesView);
            });

        },

        editCommodity: function (id) {
            console.log("editCommodity con id: " + id)

            require(['views/commodities/EditView'], function (EditCommodityView) {

                that.appView.clearView();

                var editCommodityView = new EditCommodityView({
                    el: "#content",
                    router: that
                });

                that.appView.showView(editCommodityView, {id: id});

            });

        },

        newCommodity: function (NewCommodityView) {
            console.log("newCommodity")

            require(['views/commodities/NewView'], function (NewCommodityView) {

                that.appView.clearView();

                var newCommodityView = new NewCommodityView({
                    el: "#content",
                    router: that
                });

                that.appView.showView(newCommodityView);

            });

        },

        //Shared Groups callbacks
        listSharedGroup: function (policyId) {
            console.log("listSharedGroup")

            require(['views/sharedgroups/ListView'], function (ListSharedGroupsView) {

                that.appView.clearView();

                var listSharedGroup = new ListSharedGroupsView({
                    el: "#content",
                    policyId: policyId,
                    router: that
                });

                that.appView.showView(listSharedGroup);

            });
        },

        editSharedGroup: function (id) {
            console.log("edit SharedGroup con id: " + id)

            require([ 'views/sharedgroups/EditView'], function (EditSharedGroupView) {

                that.appView.clearView();

                var editShareGroupView = new EditSharedGroupView({
                    el: "#content",
                    router: that
                });

                that.appView.showView(editShareGroupView, {id: id});
            });
        },

        newSharedGroup: function () {
            console.log("newSharedGroup")

            require(['views/sharedgroups/NewView'], function (NewSharedGroupView) {

                that.appView.clearView();

                var newSharedGroup = new NewSharedGroupView({
                    el: "#content",
                    router: that
                });

                that.appView.showView(newSharedGroup, {id: id});
            });
        },

        default: function () {
            this.navigate("cpls/", {trigger: true});
        }

    });

    return router;

});