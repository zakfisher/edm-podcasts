module.exports = angular.module('wfKeyboard', [])

.controller('KeyboardCtrl', require('./keyboard.controller'))
.controller('KeyboardKeyCtrl', require('./keyboard.key.controller'))

.service('Keyboard', require('./keyboard.service'))

.directive('keyboard', function () {
  return {
    restrict: 'E',
    template: require('./keyboard.html'),
    controller: 'KeyboardCtrl'
  };
})

.directive('keyboardkey', function () {
  return {
    restrict: 'A',
    controller: 'KeyboardKeyCtrl'
  };
});