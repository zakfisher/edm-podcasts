module.exports = function (Screen) {
  var self = Screen;

  self.goToDefaultState = function() {
  	if (self.scope.defaultState == self.scope.currentState) return false;
  	self.changeState('wide/' + self.scope.defaultState, {}, self.scope.currentState, self.scope.defaultState);
  	self.bindUrlToSearchQuery = false;
  };

  return self;
};