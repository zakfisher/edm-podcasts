// Global API Dependencies
var dependencies = [
  require('./categories').name,
  require('./centre').name,
  require('./hardware').name,
];

module.exports = angular.module('wfAPI', dependencies)
.service('API', require('./api.service'))

.run(function(API) {

  // Get Hardware
  API.fetchHardware(function(hardware) {

    // Get centre (using centre id from hardware)
    API.fetchCentre();

    // Get categories (using centre id from hardware)
    API.fetchCategories();

    // Screen-specific data calls
    switch (hardware.screen.size) {
    	case 'tall': break;
    	case 'wide': break;
    }

  });

});