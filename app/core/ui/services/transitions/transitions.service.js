module.exports = function () {
  var self = {};

  self.fadeIn = function(scope) {
    scope.opacity.set(1, {
      duration: scope.duration
    });
  };

  self.fadeOut = function(scope) {
    scope.opacity.set(0, {
      duration: scope.duration
    });
  };

  self.comeForward = function(scope) {
    self.fadeIn(scope);
    scope.translate.set([0, 0, 0], {
      duration: scope.duration
    });
  };

  self.goBack = function (scope) {
    self.fadeOut(scope);
    scope.translate.set([0, 0, scope.distance], {
      duration: scope.duration
    });
  };

  return self;
};