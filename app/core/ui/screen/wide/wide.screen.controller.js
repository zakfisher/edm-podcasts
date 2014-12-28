module.exports = function ($scope, Widescreen, Preloader) {

  // Supply $scope to Widescreen Service
  Widescreen.supply($scope);

  Preloader.whenFinished().then(function() {
    // Widescreen.show();
  });
};