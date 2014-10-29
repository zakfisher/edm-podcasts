var pkg = require('../package.json');

// Debug
// ----------------------------------------------------------------------

var launchTime = Date();
console.log('Launched:', launchTime, 'Version: ', pkg.version);

// Angular setup & modules
// ----------------------------------------------------------------------

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
  require('./modules/westfield-icons').name,
  require('./modules/menu').name
]);


// App Config
// ----------------------------------------------------------------------

app.value('config', {
  centre: {
    title: 'World Trade Centre',
    style: 'premium'
  },
  kioskID: 2348576,
  initialState: 0,
  navigationItems: [
    {
      title: 'Map',
      subtitle: '',
      icon: 'wire-map',
      type: 'map',
      options: {

      }
    },
    {
      title: 'Search',
      subtitle: 'Directory',
      icon: 'wire-search',
      type: 'search',
      options: {}
    },
    {
      title: 'Shopping',
      subtitle: 'Directory',
      icon: 'wire-shopping',
      type: 'directory',
      options: {

      }
    },
    {
      title: 'Dining',
      subtitle: 'Directory',
      icon: 'wire-dining',
      type: 'directory',
      options: {}
  },
    {
      title: 'Services',
      subtitle: 'Directory',
      icon: 'wire-services',
      type: 'directory',
      options: {}
    },
    {
      title: 'Events',
      subtitle: 'Calendar',
      icon: 'wire-see',
      type: 'calendar',
      options: {}
    },
  ]
});



// Build routes based on config
// ----------------------------------------------------------------------

app.config(function ($stateProvider) {

  // $stateProvider.state('map', {
  //   url: '/:section',
  //   template: require('./home.html'),
  //   controller: 'KioskHome'
  // });
});

// Route fallback to home rather than 404'ing
app.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
});


// Setup & Bootstrap
// ----------------------------------------------------------------------

$(document.body).on('mousewheel', function (e) {
  e.preventDefault();
  e.stopPropagation();
});

angular.bootstrap(document, ['wfWayfinding']);




// Chrome app setup
// ----------------------------------------------------------------------

try {
  console.log('go fullscreen');
  chrome.app.window.current().fullscreen();
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
  // console.warn('Chrome command not available', e);
}