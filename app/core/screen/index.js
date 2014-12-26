var height = window.innerHeight;
var width = window.innerWidth;
var size = height > width ? 'tall' : 'wide';

var screens = {
  'tall': {
    controller: require('./tall/tall.screen.controller'),
    template: require('./tall/tall.screen.html'),
    dependencies: []
  },
  'wide': {
    controller: require('./wide/wide.screen.controller'),
    template: require('./wide/wide.screen.html'),
    dependencies: []
  }
};

var screen = screens[size];

module.exports = angular.module('wfScreen', screen.dependencies)
  
  .run(function(config) {
    config.screen = {
      height: height,
      width: width,
      size: size
    };
  })

  .controller('ScreenMasterCtrl', require('./screen.master.controller'))
  .controller(size.capitalize() + 'screenCtrl', screen.controller)

  .directive(size + 'screen', function() {
    return {
      restrict: 'E',
      template: screen.template,
      controller: size.capitalize() + 'screenCtrl'
    };
  });