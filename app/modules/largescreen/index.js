module.exports = angular.module('Largescreen', [])

.service('LargescreenMenu', function ($rootScope) {
  var self = {};

  self.selectedFloor = false;

  self.selectFloor = function (floor) {
    console.log('select floor', floor);
    self.selectedFloor = floor;
    setTimeout(function () {
      self.selectedFloor = false;
      $rootScope.$apply();
    }, 25000);
  };

  self.arrayToGrid = function (array, numOfColumns) {
    var grid = [];
    var k = 0;
    var count = Math.floor(array.length / numOfColumns);
    for (var i = 0; i < numOfColumns; i++) {
      grid.push([]);
      for (var j = 0; j < count; j++) {
        var item = array[k];
        if (item !== undefined) {
          grid[i].push(item);
          k++;
        }
      }
    }
    return grid;
  };

  return self;
})

.controller('Largescreen', function ($rootScope, $scope, $famous, $timeout, CategoryService, KioskMenu, StoreService, CardStream, LargescreenMenu) {
  KioskMenu.hide();
  CardStream.isLarge = true;

  var Transitionable = $famous['famous/transitions/Transitionable'];

  var categories = CategoryService.getCategories();
  var floors = [
    {
      level: 1
    },
    {
      level: 2
    }
  ];

  var duration = 200;
  var menuWidth = 850;
  var storeViewHeight = 900;
  var storeLimit = 90;

  ///// METHODS /////
  $scope.selectSearch = function () {
    if (!$scope.lock) {
      $scope.menu.home.opacity.set(0, {
        duration: duration
      });
      $scope.fadeSearchViewIn();
      $scope.showSearch = true;
      $scope.lock = true;
      $timeout(function () {
        $scope.lock = false;
      }, duration);
    } else {
      return false;
    }
  };

  $scope.selectStore = function (item) {
    if (!$scope.lock) {
      CardStream.setStore(item);
      CardStream.show();
    } else {
      return false;
    }
  };

  $scope.selectCategory = function (code) {
    if (!$scope.lock) {
      var category = CategoryService.getCategoryByCode(code);
      var stores = StoreService.getStoresByCategory(code);
      stores = stores.splice(0, storeLimit);
      console.log('stores', stores);
      $scope.menu.stores.data.header.text = category.name;
      $scope.menu.stores.data.grid.grids = LargescreenMenu.arrayToGrid(stores, 3);
      $scope.showStores = true;
      // Set lock to prevent accidental store click during animation
      $scope.lock = true;
      $timeout(function () {
        $scope.lock = false;
      }, duration);
      $scope.fadeHomeViewOut();
      $scope.fadeStoresViewIn();
    } else {
      return false;
    }
  };

  $scope.selectFloor = function (floor) {
    $scope.activeFloor = floor.level;
  };

  $scope.backToCategories = function () {
    if (!$scope.lock) {
      $scope.fadeHomeViewIn();
      if ($scope.showStores) {
        $scope.fadeStoresViewOut();
      }
      if ($scope.showSearch) {
        $scope.fadeSearchViewOut();
      }
      $scope.lock = true;
      $timeout(function () {
        $scope.showStores = false;
        $scope.showSearch = false;
        $scope.lock = false;
        $scope.activeFloor = false;
      }, duration);
    } else {
      return false;
    }
  };

  $scope.fadeHomeViewOut = function (next) {
    next = next || function () {};
    $scope.menu.home.opacity.set(0, {
      duration: duration
    });
    $scope.menu.home.translate.set([0, storeViewHeight, 0], {
      duration: duration,
      curve: 'easeInOut'
    }, next);
  };

  $scope.fadeHomeViewIn = function (next) {
    next = next || function () {};
    $scope.menu.home.opacity.set(1, {
      duration: duration
    });
    $scope.menu.home.translate.set([0, 0, 0], {
      duration: duration,
      curve: 'easeInOut'
    }, next);
  };

  $scope.fadeStoresViewIn = function (next) {
    next = next || function () {};
    $scope.menu.stores.size.set([menuWidth, storeViewHeight], {
      duration: duration
    }, next);
    $scope.menu.stores.content.opacity.set(1, {
      duration: duration * (1.5)
    });
  };

  $scope.fadeStoresViewOut = function (next) {
    next = next || function () {};
    $scope.menu.stores.size.set([menuWidth, 0], {
      duration: duration,
      curve: 'easeInOut'
    });
    $scope.menu.stores.content.opacity.set(0, {
      duration: duration
    }, next);
  };

  $scope.fadeSearchViewIn = function (next) {
    next = next || function () {};
    $rootScope.resetSearchInput();
    $scope.menu.search.size.set([menuWidth, 900], {
      duration: duration,
      curve: 'easeInOut'
    });
    $scope.menu.search.translate.set([0, 530, 0], {
      duration: duration,
      curve: 'easeInOut'
    }, next);
    $scope.menu.search.content.opacity.set(1, {
      duration: duration
    });
    $timeout(function () {
      $rootScope.keyboard.fadeIn(duration * (0.5));
    }, duration * (0.5));
  };

  $scope.fadeSearchViewOut = function (next) {
    next = next || function () {};
    $scope.menu.search.size.set([menuWidth, 0], {
      duration: duration,
      curve: 'easeInOut'
    });
    $scope.menu.search.translate.set([0, 1000, 0], {
      duration: duration,
      curve: 'easeInOut'
    }, next);
    $scope.menu.search.content.opacity.set(0, {
      duration: duration
    });
    $rootScope.keyboard.fadeOut(duration * (0.3));
  };

  ///// VIEWS /////
  $scope.activeFloor = false;
  $scope.showStores = false;
  $scope.showSearch = false;
  $scope.lock = false;

  $scope.layout = {
    options: {
      direction: 1,
      headerSize: 240,
      footerSize: 155
    }
  };

  $scope.menu.home = {
    opacity: new Transitionable(1),
    translate: new Transitionable([0, 0, 0])
  };

  $scope.menu.background = {
    align: [0.5, 0],
    origin: [0.5, 0],
    size: [menuWidth, undefined]
  };

  $scope.menu.content = {
    align: [0.5, 0],
    origin: [0.5, 0],
    size: [menuWidth - 100, undefined],
    translate: [0, 300, 0]
  };

  $scope.menu.title = {
    text: 'Store Directory',
    size: [undefined, 240],
    translate: [0, 0, 0]
  };

  $scope.menu.categories = {
    header: {
      text: 'Select a Category',
      size: [undefined, 30],
      translate: [0, 250, 0]
    },
    grid: {
      size: [700, 400],
      translate: [30, 290, 0],
      options: {
        dimensions: [3, 1] // columns, rows
      },
      grids: LargescreenMenu.arrayToGrid(categories, 3)
    }
  };

  $scope.menu.divider = {
    bgColor: '#f4f4f4',
    size: [undefined, 1],
    translate: [0, 720, 0]
  };

  $scope.menu.fakeSearch = {
    icon: {
      size: [70, 70],
      translate: [0, 750, 0]
    },
    query: {
      text: {
        size: [500, 50],
        translate: [100, 760, 0.09]
      },
      placeholder: {
        text: 'Search for a store'
      }
    }
  };

  $scope.goBack = {
    align: [0, 1],
    translate: [50, 15, 0],
    icon: {
      size: [60, 60],
      translate: [0, 5, 0]
    },
    text: {
      value: 'Return to Categories',
      translate: [80, -8, 0]
    }
  };

  $scope.menu.floors = {
    align: [1, 0],
    size: [300, 50],
    translate: [-280, 20, 0],
    header: {
      text: 'Tap to show stores on:'
    },
    grid: {
      size: [floors.length * 60, 60],
      translate: [0, 30, 0],
      options: {
        dimensions: [floors.length, 1] // columns, rows
      },
      grids: LargescreenMenu.arrayToGrid(floors, floors.length)
    }
  };

  $scope.menu.stores = {
    align: [0.5, 0],
    origin: [0.5, 0],
    size: new Transitionable([menuWidth, 0]),
    translate: [0, 530, 0],
    background: {
      color: '#ebeced'
    },
    content: {
      align: [0.5, 0],
      origin: [0.5, 0],
      opacity: new Transitionable(0)
    },
    data: {
      header: {
        size: [undefined, 30],
        translate: [50, 0, 0]
      },
      grid: {
        size: [menuWidth - 100, 830],
        translate: [70, 100, 0],
        options: {
          dimensions: [3, 1] // columns, rows
        }
      }
    },
    goBack: $scope.goBack
  };

  $scope.menu.search = {
    align: [0.5, 0],
    origin: [0.5, 0],
    size: new Transitionable([menuWidth, 0]),
    translate: new Transitionable([0, 1000, 0]),
    background: {
      color: '#ebeced'
    },
    content: {
      align: [0.5, 0],
      origin: [0.5, 0],
      opacity: new Transitionable(0)
    },
    goBack: $scope.goBack
  };
})

//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('largescreen', {
    url: '/largescreen',
    template: require('./largescreen.html'),
    controller: 'Largescreen',
  });
});