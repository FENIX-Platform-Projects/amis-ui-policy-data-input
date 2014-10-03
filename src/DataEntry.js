define([
    'jquery',
    'js/router'
], function ($, Router) {

    var initialize = function () {

        //Prepend server URL to ajax requests
        $.ajaxPrefilter(function (options, originalOptions, jqXHR) {

            var r = new RegExp('^(?:[a-z]+:)?//', 'i');

            if (!r.test(options.url)) {
                //options.url = 'http://statistics.amis-outlook.org/policy-management/rest/v1' + options.url;
                options.url = 'http://localhost:8080/policy/rest/v1' + options.url;
            }

        });

        //Aux
        $.fn.serializeObject = function () {
            var o = {};
            var a = this.serializeArray();
            $.each(a, function () {
                if (o[this.name] !== undefined) {
                    if (!o[this.name].push) {
                        o[this.name] = [o[this.name]];
                    }
                    o[this.name].push(this.value || '');
                } else {
                    o[this.name] = this.value || '';
                }
            });
            return o;
        };


        //Fake login
        $(".protected").hide();
        $('#sign-in-btn').on('click', function () {
            $('#signInModal').modal('hide');
            $(".protected").show();
        });

        //JJ feedback
        //$(".feedback-system-icon").fancybox();

        // Pass in our Router module and call it's initialize function
        var router = new Router();

    };

    return {
        initialize: initialize
    };
});