module.exports = angular.module('LargescreenSidebar', [])

.service('LargescreenSidebar', function ($famous, $famousPipe, $state, $stateParams, $rootScope, CategoryService, LargescreenDirectory) {
  var sidebar = {};

  /////// CONTROL METHODS ////////
  sidebar.open = function() {
    sidebar.active = true;
    sidebar.scrollview.view.goToPage(0);
    $('.sidebar-overlay').show();
  };

  sidebar.close = function() {
    sidebar.active = false;
    sidebar.scrollview.view.goToPage(1);
    $('.sidebar-overlay').hide();
  };

  sidebar.toggle = function() {
    var page = sidebar.scrollview.view.getCurrentIndex();
    switch (page) {
      case 0: // Open
      sidebar.close();
      break;
      case 1: // Closed
      sidebar.open();
      break;
    }
  };

  sidebar.goToCategory = function(code) {
    LargescreenDirectory.goToCategory(code);
    sidebar.close();
  };

  sidebar.selectFloor = function(level) {
    LargescreenDirectory.selectFloor(level);
    sidebar.close();
  };

  sidebar.arrayToGrid = function(array, numOfColumns) {
    var count = array.length;
    var grid1 = array.splice(0, count/numOfColumns + 1), 
        grid2 = array.splice(0, count/numOfColumns + 1), 
        grid3 = array;
    return [grid1, grid2, grid3];
  };

  /////// INIT METHODS ////////
  sidebar.render = function() {
    var ScrollSync = $famous['famous/inputs/ScrollSync'];
    var EventHandler = $famous['famous/core/EventHandler'];
    var categories = CategoryService.getCategories();
    var columnCount = 3;
    var floors = (function() {
      /* 
        API call to Jibestream for floor count (from Phiroze)
        JMap.getMaps(function(floorArray) {
          console.log('map', floorArray);
        }); 
      */
      return [
        { level: 2 },
        { level: 1 }
      ];
    })();
    angular.extend(sidebar, {
      size: [309, undefined],
      translate: [0, 0, 0],
      overlay: {
        translate: [274, 0, 0]
      },
      scrollview: {
        eventHandler: new EventHandler(),
        scrollSync: new ScrollSync(),
        options : {
          clipSize: 282,
          paginated: true,
          speedLimit: 100,
          drag: 0,
          direction: 0,
          friction: 0,
          pageStopSpeed: 1
        }
      },
      background: {
        size:      [830, undefined],
        translate: [-100, 0, 0],
      },
      content: {
        size:      [640, undefined],
        translate: [160, 200, 0],
        title: {
          text:      'Store Directory',
          size:      [undefined, 240],
          translate: [0, 0, 0]
        },
        tapIcon: {
          size:      [0.6*79, 0.6*103],
          translate: [-50, 250, 0]
        },
        categories: {
          header: {
            text:      'Select a Category',
            size:      [undefined, 30],
            translate: [0, 270, 0]
          },
          grid: {
            size:      [undefined, 400],
            translate: [0, 290, 0],
            options: {
              dimensions: [columnCount, 1], // columns, rows
            },
            grids: sidebar.arrayToGrid(categories, columnCount)
          }
        },
        floors: {
          header: {
            text:      'Select a Floor',
            size:      [undefined, 30],
            translate: [0, 710, 0]
          },
          grid: {
            size:      [undefined, 100],
            translate: [0, 730, 0],
            options: {
              dimensions: [columnCount, 1], // columns, rows
            },
            grids: sidebar.arrayToGrid(floors, columnCount)
          }
        },
        divider: {
          bgColor:   "#2a2a2a",
          size:      [undefined, 2],
          translate: [0, 820, 0]
        },
        searchIcon: {
          size:      [0.6*117, 0.6*116],
          translate: [0, 850, 0]
        }
      },
      button: {
        align:   [-0.2, 0.5],
        origin:  [0.5, 0],
        size:    [160, 45],
        rotateZ: Math.PI / 2
      }
    });
  };

  sidebar.pipeEvents = function() {
      var eventHandler = sidebar.scrollview.eventHandler;
      var scrollSync = sidebar.scrollview.scrollSync;
      var scrollView = $famous.find('#largeSidebarScrollView')[0].renderNode;
      sidebar.scrollview.view = scrollView;

      scrollSync.on("update", function() {
        sidebar.active = (scrollView.getAbsolutePosition() < 150);
        if (sidebar.active) $('.sidebar-overlay').show();
        else $('.sidebar-overlay').hide();
      });

      var background     = $famous.find('#largeSidebarScrollView .sidebar-menu-bg')[0].renderNode;
      var button         = $famous.find('#largeSidebarScrollView .sidebar-menu-btn')[0].renderNode;
      var title          = $famous.find('#largeSidebarScrollView .sidebar-menu-title')[0].renderNode;
      var tapIcon        = $famous.find('#largeSidebarScrollView .sidebar-menu-tap-icon')[0].renderNode;
      var categoryHeader = $famous.find('#largeSidebarScrollView .sidebar-menu-category-header')[0].renderNode;
      var floorHeader    = $famous.find('#largeSidebarScrollView .sidebar-menu-floor-header')[0].renderNode;
      var divider        = $famous.find('#largeSidebarScrollView .sidebar-menu-divider')[0].renderNode;
      var searchIcon     = $famous.find('#largeSidebarScrollView .sidebar-menu-search-icon')[0].renderNode;

      var pipes = [
        eventHandler, 
        scrollView, 
        scrollSync
      ];
      var targets = [
        background, 
        button, 
        title, 
        tapIcon, 
        categoryHeader, 
        floorHeader, 
        searchIcon
      ];
      $famousPipe.pipesToTargets(pipes, targets);
  };

  return sidebar;
})

.directive('largescreenSidebar', function ($timeout) {
  return {
    restrict: 'E',
    template: require('./largescreen-sidebar.html'),
    controller: function ($scope, LargescreenSidebar) {
      $scope.sidebar = LargescreenSidebar;
      $scope.sidebar.render();
    },
    link: {
      post: function ($scope) {
        $scope.sidebar.pipeEvents();
        $timeout($scope.sidebar.open, 0);
      }
    },
  };
});