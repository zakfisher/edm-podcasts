module.exports = angular.module('LoadingScreen', [])

.service('Preloader', function ($q, $rootScope) {
  var Preloader = {};
  var tasks = [];

  Preloader.createTask = function (description) {
    console.log("Registered task", description);
    var deferred = $q.defer();
    tasks.push(deferred.promise);
    deferred.promise
      .then(function () {
        console.log("completed", description);
      });
    return deferred;
  };

  Preloader.whenFinished = function () {
    return $q.all(tasks);
  };

  return Preloader;
})



.controller('LoadingScreenController', function ($scope, KioskMenu, Preloader, $state, $famous, $rootScope) {

  var Transitionable = $famous['famous/transitions/Transitionable'];
  var Timer = $famous['famous/utilities/Timer'];

  $scope.spinner = {
    speed: 55
  };
  $scope.rotateY = new Transitionable(0);

  //run function on every tick of the Famo.us engine
  Timer.every(function () {
    var adjustedSpeed = parseFloat($scope.spinner.speed) / 800;
    $scope.rotateY.set($scope.rotateY.get() + adjustedSpeed);
  }, 1);

  Preloader.whenFinished().then(function () {
    $state.go("largescreen");
    $rootScope.mapReady = true;
    KioskMenu.show();
  });
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('preloader', {
    url: '/preloader',
    template: require('./loading.html'),
    controller: 'LoadingScreenController'
  });
});