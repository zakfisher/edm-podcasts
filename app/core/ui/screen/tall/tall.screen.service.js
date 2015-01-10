module.exports = function (Screen, Keyboard) {
  var self = Screen;

  self.goToDefaultState = function() {
  	if (self.scope.defaultState == self.scope.currentState) return false;
  	self.changeState('tall/' + self.scope.defaultState, {}, self.scope.currentState, self.scope.defaultState);
  	self.bindUrlToSearchQuery = false;
  };

  return self;
};