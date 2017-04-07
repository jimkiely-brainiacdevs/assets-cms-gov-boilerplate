// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
requirejs.config({
    "baseUrl": "/static/js/vendor",
    "paths": {
        app: '../app',
        jquery: 'jquery/jquery',
        bootstrap: 'bootstrap/3.3.1/js/bootstrap.min',
        jqueryui: 'jqueryui/jquery-ui',
        assetsCore: 'globalassets/js/assets.core',
        assetsResponsive: 'globalassets/js/assets.responsive'
    },
    shim: {
        bootstrap: {
            'deps': ['jquery']
        },
        jqueryui: {
            'deps': ['jquery']
        },
        assetsCore: {
            'deps': ['jquery']
        },
        assetsResponsive: {
            'deps': ['jquery']
        },

    }
});

// Load the main app module to start the app
requirejs(["app/main"]);