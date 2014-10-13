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
    require('./modules/jibestream-map').name,
    require('./modules/menu').name
  ]);

//Routing fallback to home
app.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
});

// Debug
var launchTime = Date();
console.log('Launched at', launchTime);

// Go Fullscreen
try {
  // chrome.app.window.current().fullscreen();
} catch (e) {
  console.warn('Chrome fullscreen command not available.')
}