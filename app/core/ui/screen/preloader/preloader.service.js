module.exports = function ($q, $famous, Transitions) {
  var self = {}, tasklist = [];
  
  self.tasks = {};

  self.supply = function(scope) {
    self.scope = scope;
  };

  self.spin = function() {
    var Timer = $famous['famous/utilities/Timer'];
    //run function on every tick of the Famo.us engine
    Timer.every(function () {
      var adjustedSpeed = parseFloat(self.scope.spinner.speed) / 800;
      self.scope.rotateY.set(self.scope.rotateY.get() + adjustedSpeed);
    }, 1);
  };

  self.show = function() {
    Transitions.comeForward(self.scope);
  };

  self.hide = function() {
    Transitions.goBack(self.scope);
  };

  self.createTask = function (description) {
    console.log('Registered task', description);
    var deferred = $q.defer();
    tasklist.push(deferred.promise);
    self.tasks[description] = deferred.promise;
    deferred.promise
      .then(function () {
        console.log('completed', description);
      });
    return deferred;
  };

  self.whenFinished = function () {
    return $q.all(tasklist);
  };

  return self;
};