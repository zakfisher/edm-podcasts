module.exports = function (Transitions) {
  var self = {};

  self.supply = function(scope) {
  	self.scope = scope;
  };

  self.show = function() {
  	Transitions.fadeIn(self.scope);
  };

  return self;
};