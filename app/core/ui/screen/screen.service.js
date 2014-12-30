module.exports = function (Transitions) {
	var me = {};

	me.extend = function() {
		var self = {};

	  self.supply = function(scope) {
	  	self.scope = scope;
	  };

	  self.show = function() {
	  	Transitions.fadeIn(self.scope);
	  };

	  self.getState = function(state) {
	  	return self.scope.states[state].service;
	  };

	  self.showState = function(state) {
	    self.scope.states[state].active = true;
	  };

	  self.hideState = function(state) {
	    self.scope.states[state].active = false;
	  };

	  return self;
	};

	return me;
};