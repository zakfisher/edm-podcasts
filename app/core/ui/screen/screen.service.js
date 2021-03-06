module.exports = function ($timeout, $state, $stateParams, config, Transitions) {
  var self = {};
  self.screenLock = false;
  self.bindUrlToSearchQuery = false;

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
    return self;
  };

  self.hideState = function(state) {
    self.scope.states[state].active = false;
    return self;
  };

  self.changeUrl = function(state, stateParams) {
  	$state.go(state, stateParams, { location: true, inherit: false, notify: false });
  };

  self.changeState = function(state, stateParams, from, to) {
    if (self.screenLock) return;
  	
  	self.screenLock = true;
  	self.scope.currentState = to;

  	// Change url without triggering hard refresh
  	self.changeUrl(state, stateParams);

  	// Show new <div ui-view>
    self.showState(to);
    
    // State change animations
    $timeout(function() {
        self.getState(from).hide();
        self.getState(to).show();
    }, 100);

    // Hide old <div ui-view>
    // Unlock screen (so we can change states again)
		$timeout(function() {
	   	 self.hideState(from);
       self.screenLock = false;
		}, 1000);

  };

  return self;
};