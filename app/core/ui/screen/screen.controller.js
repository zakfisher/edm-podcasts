module.exports = function ($scope, Preloader, Hardware) {

  Preloader.whenFinished().then(function () {
    $scope.size = Hardware.get().screen.size;
  });

};