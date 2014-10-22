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


//Todo, retrieve config then initialise

app.value('config', {
  centre: {
    title: 'World Trade Centre',
    style: 'premium'
  },
  kioskID: 2348576,
  initialState: 0,
  navigationItems: [
    {
      title: 'Shopping',
      type: 'directory-view',
      options: {

      }
    },
    {
      title: 'Dining',
      type: 'directory-view',
      options: {}
    },
    {
      title: 'Transit',
      type: 'transit',
      options: {}
    },
    {
      title: 'Dining',
      type: 'directory-view',
      options: {}
    },
  ]
});

$(document.body).on('mousewheel', function (e) {
  e.preventDefault();
  e.stopPropagation();
});

angular.bootstrap(document, ['wfWayfinding']);