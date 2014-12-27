module.exports = function ($q) {
  var Preloader = {},
    tasklist = [];

  Preloader.tasks = {};

  Preloader.createTask = function (description) {
    console.log('Registered task', description);
    var deferred = $q.defer();
    tasklist.push(deferred.promise);
    Preloader.tasks[description] = deferred.promise;
    deferred.promise
      .then(function () {
        console.log('completed', description);
      });
    return deferred;
  };

  Preloader.whenFinished = function () {
    return $q.all(tasklist);
  };

  return Preloader;
};