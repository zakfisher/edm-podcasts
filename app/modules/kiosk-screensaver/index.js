module.exports = angular.module('KioskScreenSaver', [])

.run(function (KioskScreenSaver) {
  window.addEventListener('touchstart', KioskScreenSaver.resetTimeout);
})

.service('KioskScreenSaver', function ($rootScope, $famous, config, $state, Preloader, CardStream) {
  var self = {},
    saverTimeoutFunction,
    saverTimeout = 30000,
    slideDuration = 16000,
    saverInterval,
    Easing = $famous['famous/transitions/Easing'],
    Timer = $famous['famous/utilities/Timer'],
    Transitionable = $famous['famous/transitions/Transitionable'];

  imgs = [
      '/screensaver/Guess_1.jpg',
      '/screensaver/Guess_2.jpg',
      '/screensaver/Guess_3.jpg',
      '/screensaver/Guess_4.jpg',
      '/screensaver/Guess_5.jpg',
      '/screensaver/IT_1.jpg',
      '/screensaver/IT_2.jpg',
      '/screensaver/IT_3.jpg',
      '/screensaver/VC_1.jpg',
      '/screensaver/VC_2.jpg',
      '/screensaver/VC_3.jpg',
      '/screensaver/VC_4.jpg'
    ];

  self.imgs = [];
  self.activeImage = false;

  imgs.forEach(function (img) {
    self.imgs.push({
      url: img,
      active: true,
      opacity: new Transitionable(0),
      scale: new Transitionable([1.2, 1.2]),
      translate: new Transitionable([0, 0, -10])
    });
  });

  self.activateImage = function (n) {
    var img = self.imgs[n];
    if (img && n !== self.activeImage) {
      self.deactivateImage(self.activeImage);
      img.active = true;
      img.opacity.set(1, {
        duration: slideDuration / 4
      });
      img.scale.set([1.2, 1.2]);
      img.scale.set([1, 1], {
        duration: slideDuration / 4
      });
      img.translate.set([(Math.random() * 500) - 250, (Math.random() * 500) - 250]);
      img.translate.set([0, 0], {
        duration: slideDuration / 4
      });
      self.activeImage = n;
    }
  };

  self.deactivateImage = function (n) {
    if (n !== false) {
      self.imgs[n].opacity.set(0, {
        duration: slideDuration
      }, function () {
        self.imgs[n].active = false;
      });
    }
  };

  self.resetTimeout = function () {
    Timer.clear(saverTimeoutFunction);
    saverTimeoutFunction = Timer.setTimeout(function () {
        self.run();
        $rootScope.$apply();
      },
      saverTimeout);
  };

  self.run = function () {
    saverInterval = Timer.setInterval(function () {
      if (self.activeImage === (self.imgs.length - 1)) {
        self.activateImage(0);
      } else {
        self.activateImage(self.activeImage + 1);
      }
    }, slideDuration);
    self.isRunning = true;
  };

  self.exit = function () {

    self.isRunning = false;
    Timer.clear(saverInterval);
    self.resetTimeout();
  };

  self.setScreenSaverTimeout = function (n) {
    saverTimeout = n;
  };

  //Activate
  self.activateImage(0);
  Preloader.whenFinished().then(function () {
    self.resetTimeout();
  });

  return self;
})

.directive('kioskScreensaver', function () {
  return {
    restrict: "E",
    template: require('./screensaver.html'),
    controller: function ($scope, $famous, $timeout, KioskScreenSaver) {

      var Transitionable = $famous['famous/transitions/Transitionable'];
      var Easing = $famous['famous/transitions/Easing'];

      $scope.saverPosition = new Transitionable([0, 0, 200]);
      $scope.saverOpacity = new Transitionable(0);
      $scope.KioskScreenSaver = KioskScreenSaver;

      $scope.$watch('KioskScreenSaver.isRunning', function (a, b) {
        if (a !== b) {
          if (a) {
            $scope.startScreenSaver();
          } else {
            $scope.exitScreenSaver();
          }
        }
      });

      $scope.exitScreenSaver = function () {
        $scope.saverPosition.set([0, 0, 1000], {
          duration: 500
        }, function () {
          $scope.showScreenSaver = false;
        });
        $scope.saverOpacity.set(0, {
          duration: 500
        });
        $scope.uiComeForward();
      };

      $scope.startScreenSaver = function () {
        $scope.showScreenSaver = true;
        $scope.saverPosition.set([0, 0, 0], {
          duration: 500
        });
        $scope.saverOpacity.set(1, {
          duration: 500
        });
        $scope.uiGoBack();
      };

    }
  };
});