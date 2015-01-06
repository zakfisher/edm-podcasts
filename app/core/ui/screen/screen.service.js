module.exports = function ($state, $stateParams, Transitions) {
	var me = {};

	me.extend = function() {
	  var self = {};

	  self.go = function(state, stateParams) {
	  	$state.go(state, stateParams, { location: true, inherit: false, notify: false });
	  };

	  self.supply = function(scope) {
	  	self.scope = scope;
	  };

	  self.show = function() {
	  	// Fade in screen and default state together
	  	Transitions.fadeIn(self.scope);
	  	self.getState(self.scope.defaultState).show();
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