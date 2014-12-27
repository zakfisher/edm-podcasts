var height = window.innerHeight;
var width = window.innerWidth;
var size = height > width ? 'tall' : 'wide';

// Global UI Dependencies
var dependencies = [
  
  // Services
  require('./services/kiosk').name,
  
  // States
  require('./states/preloader').name,

  // Directives
  require('./directives/icon').name
];

var screens = {
  'tall': {
    initialView: 'tall/categories',
    controller: require('./screen/tall/tall.screen.controller'),
    template: require('./screen/tall/tall.screen.html'),
    dependencies: [
      // States
      require('./states/tall.categories').name,
      require('./states/tall.search').name
    ]
  },
  'wide': {
    initialView: 'wide/map',
    controller: require('./screen/wide/wide.screen.controller'),
    template: require('./screen/wide/wide.screen.html'),
    dependencies: [
      // States
      require('./states/wide.map').name,
      require('./states/wide.search').name,
      require('./states/wide.shopping').name,
      require('./states/wide.dining').name,
      require('./states/wide.services').name,
      require('./states/wide.events').name
    ]
  }
};

module.exports = angular.module('wfUI', dependencies.concat(screens[size].dependencies))
  
  .controller('ScreenCtrl', require('./screen/screen.controller'))
  .controller(size.capitalize() + 'screenCtrl', screens[size].controller)

  .directive(size + 'screen', function() {
    return {
      restrict: 'E',
      template: screens[size].template,
      controller: size.capitalize() + 'screenCtrl'
    };
  })

  .run(function($state, behaviors, config, Preloader) {
    config.screen = {
      height: height,
      width: width,
      size: size
    };

    // Set Global Behaviors
    behaviors.disableRightClick();
    behaviors.disableMousewheel();

    // Go To Initial State
    $state.go('preloader');
    Preloader.whenFinished().then(function () {
      $state.go(screens[size].initialView);
    //   // $rootScope.mapReady = true;
    //   // KioskMenu.show();
    });

  });





// require('./modules/map').name,
// require('./modules/search').name,
// require('./modules/dining').name,
// require('./modules/shopping').name,
// require('./modules/directory').name,
// require('./modules/kiosk-screensaver').name,
// require('./modules/jibestream-map').name,
// require('./modules/largescreen').name,

// // Custom Services
// require('./modules/category-service').name,
// require('./modules/centre-service').name,
// require('./modules/weather-service').name,
// require('./modules/kiosk-service').name,
// require('./modules/store-service').name,

// 
// require('./modules/svg-keyboard').name,
// require('./modules/card-stream').name,
// require('./modules/menu').name,