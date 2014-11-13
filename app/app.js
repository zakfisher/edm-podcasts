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
  // 'ngAnimate',
  'ui.router',
  'ngResource',
  'ngSanitize',
  'ngTouch',

  // Kiosk App Modules
  // '.name' is provided by angular.module, index.js is picked up as the included file
  require('./modules/map').name,
  require('./modules/dining').name,
  require('./modules/search').name,
  require('./modules/shopping').name,
  require('./modules/services').name,
  require('./modules/events').name,
  require('./modules/directory').name,
  require('./modules/jibestream-map').name,
  require('./modules/westfield-icons').name,
  require('./modules/category-service').name,
  require('./modules/preloader').name,
  require('./modules/svg-keyboard').name,
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
  states: [
    {
      title: 'Map',
      subtitle: '',
      icon: 'wire-map-rev',
      type: 'kioskmap',
    },
    {
      title: 'Search',
      subtitle: 'Directory',
      icon: 'wire-search-rev',
      type: 'search'
    },
    {
      title: 'Shopping',
      subtitle: 'Directory',
      icon: 'wire-shopping-rev',
      type: 'shopping'
    },
    {
      title: 'Dining',
      subtitle: 'Directory',
      icon: 'wire-dining-rev',
      type: 'dining'
    },
    {
      title: 'Services',
      subtitle: 'Directory',
      icon: 'wire-services-rev',
      type: 'services',
    },
    {
      title: 'Events',
      subtitle: 'Calendar',
      icon: 'wire-see-rev',
      type: 'events'
    },
  ]
});



// Basic routes based on config
// ----------------------------------------------------------------------

// Route fallback to home rather than 404'ing
app.config(function ($urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
});

app.run(function ($state, Preloader, $q) {
  $state.go('preloader');
});


// Setup & Bootstrap
// ----------------------------------------------------------------------

$(document.body).on('mousewheel, contextmenu', function (e) {
  e.preventDefault();
  e.stopPropagation();
});


// JMap.initMapsStandAlone("http://jibestream2.cloudapp.net:8082", {
//   deviceId: 126092,
//   languageCode: "en"
// });

// JMap.addListener("StandAloneMapsReady", function () {
// });

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