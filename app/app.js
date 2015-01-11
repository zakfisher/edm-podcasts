// Load Dependencies
var dependencies = [
  'famous.angular',
  'ui.router',
  'ngResource',
  'ngSanitize',
  'ngTouch',
  require('./core/config').name,
  require('./core/utils').name,
  // require('./core/api').name,
  // require('./core/ui').name
];

// Launch App
var app = angular.module('EDMpodcasts', dependencies)

  // Set Routes
  .config(require('./core/routes'))

  // Init
  .run(function() {
    
    // Debug
    require('./core/chrome.setup');
    var pkg = require('../package.json');
    console.log('Launched:', Date(), 'Version: ', pkg.version);

  });