// Global API Dependencies
var dependencies = [
  require('./categories').name,
  require('./centre').name,
  require('./hardware').name,
  require('./weather').name,
];

module.exports = angular.module('wfAPI', dependencies)
.service('API', require('./api.service'))

.run(function(API) {

  // Get Hardware
  API.fetchHardware(function(hardware) {

    // Get categories (using centre id from hardware)
    API.fetchCategories();

    // Get centre (using centre id from hardware)
    API.fetchCentre(function(centre) {

      // Screen-specific data calls
      switch (hardware.screen.size) {
        case 'tall': 
          API.fetchWeather();
        break;
        case 'wide': break;
      }

    });

  });

});