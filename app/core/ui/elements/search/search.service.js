module.exports = function($famous, Keyboard) {
  var self = {};

  self.supply = function(scope) {
    self.scope = scope;
  };

  self.bindToKeyboard = function(scope) {
  	var Timer = $famous['famous/utilities/Timer'];
  	Timer.every(function () {
      scope.search.query.input = Keyboard.getString();
    }, 1);
  };

  return self;
};