module.exports = function () {
  var self = {};

  self.fadeIn = function(scope, duration) {
    scope.opacity.set(1, {
      duration: duration
    });
  };

  self.fadeOut = function(scope, duration) {
    scope.opacity.set(0, {
      duration: duration
    });
  };

  self.comeForward = function(scope, duration) {
    self.fadeIn(scope, duration);
    scope.translate.set([0, 0, 0], {
      duration: duration
    });
  };

  self.goBack = function (scope, duration, distance) {
    self.fadeOut(scope, duration);
    scope.translate.set([0, 0, distance], {
      duration: duration
    });
  };

  return self;
};