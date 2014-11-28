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

  // sidebar.goToSearch = function() {
  //   $state.go('search');
  //   sidebar.hide();
  // };

  /////// INIT METHODS ////////
  sidebar.render = function() {
    var ScrollSync = $famous['famous/inputs/ScrollSync'];
    var EventHandler = $famous['famous/core/EventHandler'];
    angular.extend(sidebar, {
      categories: CategoryService.getCategories(),
      floors: (function() {
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
      })(),
      size: [309, undefined],
      translate: [0, 0, 0],
      overlay: {
        position: [274, 0, 0]
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
      menuBg: {
        size:      [374, undefined],
        translate: [-100, 0, 0],
      },
      menuContent: {
        align: [0.62, 0.5],
        origin: [0.5, 0.5]
      },
      menuBtn: {
        align: [-0.2, 0.5],
        origin: [0.5, 0],
        size: [160, 45],
        rotateZ: Math.PI / 2
      }
    });
    sidebar.menuContent.size = [184, (function(categoryCount, floorCount) {
      var contentHeight = 0;
      var listCount = 2;
      var listTitleHeight = 25;
      var listItemHeight = 46;
      var listMarginHeight = 32;
      // Add List Title
      contentHeight += (listCount * listTitleHeight);
      // Add List Margins
      contentHeight += (listCount * listMarginHeight);
      // Add Category List Items
      contentHeight += (categoryCount * listItemHeight);
      // Add Floor List Items
      contentHeight += (floorCount * listItemHeight);
      return contentHeight;
    })(sidebar.categories.length, sidebar.floors.length)];
  };

  sidebar.setPipes = function() {
      var scrollView = $famous.find('#largeSidebarScrollView')[0].renderNode;
      var eventHandler = sidebar.scrollview.eventHandler;
      var scrollSync = sidebar.scrollview.scrollSync;
      sidebar.scrollview.view = scrollView;

      scrollSync.on("update", function() {
        sidebar.active = (scrollView.getAbsolutePosition() < 150);
        if (sidebar.active) $('.sidebar-overlay').show();
        else $('.sidebar-overlay').hide();
      });

      var menuBg      = $famous.find('#largeSidebarScrollView .sidebar-menu-bg')[0].renderNode;
      var menuContent = $famous.find('#largeSidebarScrollView .sidebar-menu-content')[0].renderNode;
      var menuBtn     = $famous.find('#largeSidebarScrollView .sidebar-menu-btn')[0].renderNode;

      var pipes = [eventHandler, scrollView, scrollSync];
      var targets = [menuBg, menuContent, menuBtn];
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
        $scope.sidebar.setPipes();
        $timeout($scope.sidebar.close, 0);

        // // Overlay Close Menu Listener
        // $(document).on('click', '.sidebar-overlay', function(e) {
        //     sidebar.close();
        //     $('div.caret').addClass('up');
        //     $('.sidebar-overlay').hide();
        // });

      }
    },
  };
});