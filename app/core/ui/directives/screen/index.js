module.exports = angular.module('wfScreen', [])

.controller('ScreenCtrl',     require('./screen.controller'))
.controller('TallscreenCtrl', require('./tall/tall.screen.controller'))
.controller('WidescreenCtrl', require('./wide/wide.screen.controller'))

.directive('tallscreen', function() {
  return {
    restrict: 'E',
    template: require('./tall/tall.screen.html'),
    controller: 'TallscreenCtrl'
  };
})

.directive('widescreen', function() {
  return {
    restrict: 'E',
    template: require('./wide/wide.screen.html'),
    controller: 'WidescreenCtrl'
  };
});