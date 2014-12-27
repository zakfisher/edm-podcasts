module.exports = angular.module('wfScreen', [])

.controller('ScreenCtrl',     require('./screen.controller'))
.controller('TallscreenCtrl', require('./tall/tall.screen.controller'))
.controller('WidescreenCtrl', require('./wide/wide.screen.controller'))

.service('Tallscreen', require('./tall/tall.screen.service'))
.service('Widescreen', require('./wide/wide.screen.service'))

.directive('screen', function() {
  return {
    restrict: 'E',
    template: require('./screen.html'),
    controller: 'ScreenCtrl'
  }
})

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