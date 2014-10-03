/*global requirejs*/

requirejs.config({
    "baseUrl": "src/lib",
    "paths": {
        "js": "..",
        "models": "../models",
        "views": "../views",
        "collections": "../collections",
        "templates": "../../templates"
    },
    "shim": {
        "bootstrap": {
            deps: ["jquery"]
        },
        backbone: {
            //These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            //Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        },
        underscore: {
            exports: '_'
        }
    }
});

require(["js/DataEntry", "domReady!", "bootstrap" ], function (DataEntry) {

    DataEntry.initialize();

});