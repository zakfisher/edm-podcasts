module.exports = function (Tallscreen, Transitions) {
  var self = {};

  self.supply = function(scope) {
  	self.scope = scope;
  };

  self.show = function() {
    Transitions.fadeIn(self.scope);
  };

  self.hide = function() {
  	Transitions.fadeOut(self.scope);
  };

  return self;
};