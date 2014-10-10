var pkg = require('../package.json');

var app = angular.module('wfWayfinding', [
    // Plugins
    'famous.angular',
    'ngAnimate',
    'ui.router',
    'ngResource',
    'ngSanitize',
    'ngTouch',

    // App Modules
    require('./modules/home').name,
    require('./modules/mobiletest1').name,
    require('./modules/pair-from-kiosk').name,
    require('./modules/menu').name
  ]);

//Routing fallback to home
app.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/mobiletest1');
});

// Debug
var launchTime = Date();
console.log('Launched at', launchTime);

// Go Fullscreen
chrome.app.window.current().fullscreen();