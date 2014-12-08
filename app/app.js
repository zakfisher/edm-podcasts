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
  require('./modules/kiosk-master-controller').name,
  require('./modules/map').name,
  require('./modules/search').name,
  require('./modules/dining').name,
  require('./modules/shopping').name,
  require('./modules/services').name,
  require('./modules/events').name,
  require('./modules/directory').name,
  require('./modules/kiosk-screensaver').name,
  require('./modules/jibestream-map').name,
  require('./modules/largescreen').name,
  require('./modules/largescreen-weather').name,

  // Custom Services
  require('./modules/category-service').name,
  require('./modules/centre-service').name,
  require('./modules/weather-service').name,
  require('./modules/kiosk-service').name,
  require('./modules/store-service').name,

  require('./modules/preloader').name,
  require('./modules/svg-keyboard').name,
  require('./modules/card-stream').name,
  require('./modules/menu').name,
  require('./public/components/westfield-icons').name
]);


// App Config
// ----------------------------------------------------------------------

//@todo get info   //127.0.0.1/id.html

app.value('config', {
  centre: {
    title: 'World Trade Centre',
    style: 'premium'
  },
  kioskID: 2348576,
  initialState: 0,
  placeholderContent: {
    storeFront: '/placeholder/valleyFair.jpg',
    logo: '/placeholder/logo.png'
  },
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
    } //,
    // {
    //   title: 'Services',
    //   subtitle: 'Directory',
    //   icon: 'wire-services-rev',
    //   type: 'services',
    //   disabled: true
    // },
    // {
    //   title: 'Events',
    //   subtitle: 'Calendar',
    //   icon: 'wire-see-rev',
    //   type: 'events',
    //   disabled: true
    // },
  ]
});


// Basic routes based on config
// ----------------------------------------------------------------------

// Route fallback to home rather than 404'ing
app.config(function ($urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
});

app.run(function ($state, Preloader, $q, KioskService) {

  if (window.innerHeight > window.innerWidth) {
    window.isLargescreen = true;
    window.initialView = 'largescreen';
  } else {
    window.isLargescreen = false;
    window.initialView = 'kioskmap';
  };

  $state.go('preloader');
  KioskService.saveState(false);
  // Backdoor to switch to largescreen view
  $(window).on('keydown', function (e) {
    if (e.keyCode === 76) {
      $state.go('largescreen');
    }
  });

});

// Setup & Bootstrap
// ----------------------------------------------------------------------

$(document.body).on('mousewheel', function (e) {
  e.preventDefault();
  e.stopPropagation();
});

angular.bootstrap(document, ['wfWayfinding']);

// Disable Right Click
function disableRightClick() {
  document.oncontextmenu = RightMouseDown;
  document.onmousedown = mouseDown;

  function mouseDown(e) {
    if (e.which == 3) { //righClick
      e.preventDefault();
    }
  }

  function RightMouseDown() {
    return false;
  }
}

// disableRightClick();


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