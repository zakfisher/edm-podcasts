var pkg = require('../package.json');

var app = angular.module('wfWayfinding', [
  // Plugins & Libraries
  'famous.angular',
  'ngAnimate',
  'ui.router',
  'ngResource',
  'ngSanitize',
  'ngTouch',

  // Kiosk App Modules
  // '.name' is provided by angular.module, index.js is picked up as the included file
  require('./modules/home').name,
  require('./modules/directory-view').name,
  require('./modules/jibestream-map').name,
  require('./modules/menu').name
]);

// Route fallback to home rather than 404'ing
app.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
});

// Debug
var launchTime = Date();
console.log('Launched at', launchTime);

// Chrome app setup
try {
  // chrome.app.window.current().fullscreen();
  chrome.bluetooth.getDevices(function (x) {
    console.log(x);
  });
  chrome.bluetooth.getAdapterState(function (a) {
    console.log(a);
  });
  chrome.system.cpu.getInfo(function (c) {
    console.log('cpu', c);
  })
} catch (e) {
  console.warn('Chrome command not available', e);
}


//Todo, retrieve content then initialise

angular.bootstrap(document, ['wfWayfinding']);