module.exports = angular.module('LargescreenSidebar', [])

.service('LargescreenSidebar', function ($famous, $famousPipe, $state, $stateParams, $rootScope, CategoryService) {
  var sidebar = {};

  sidebar.open = function() {
    // sidebar.scrollview.view.goToPage(0);
    sidebar.active = true;
  };

  sidebar.close = function() {
    sidebar.scrollview.view.goToPage(1);
    sidebar.active = false;
  };

  // sidebar.goToSearch = function() {
  //   $state.go('search');
  //   sidebar.hide();
  // };

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
      var pipes = [eventHandler, scrollView, scrollSync];
      sidebar.scrollview.view = scrollView;

      var menuBg      = $famous.find('#largeSidebarScrollView .sidebar-menu-bg')[0].renderNode;
      var menuContent = $famous.find('#largeSidebarScrollView .sidebar-menu-content')[0].renderNode;
      var menuBtn     = $famous.find('#largeSidebarScrollView .sidebar-menu-btn')[0].renderNode;
      var targets = [menuBg, menuContent, menuBtn];

      $famousPipe.pipesToTargets(pipes, targets);

      scrollSync.on("update", function() {
        sidebar.active = (scrollView.getAbsolutePosition() < 150);
      });
  };

  return sidebar;
})

.directive('largescreenSidebar', function ($famous) {
  return {
    restrict: 'E',
    template: require('./largescreen-sidebar.html'),
    controller: function ($scope, $famous, LargescreenSidebar) {
      $scope.sidebar = LargescreenSidebar;
      $scope.sidebar.render();
    },
    link: {
      post: function ($scope) {
        $scope.sidebar.setPipes();
        $scope.sidebar.close();
        

        // // Category Filter Listener
        // $(document).on('click', 'ul.sidebar-category-list li', function(e) {
        //   var code = $(e.currentTarget).attr('data-code');
        //   LargescreenDirectory.goToCategory(code);
        //   sidebar.close();
        //   $('div.caret').addClass('up');
        //   $('.sidebar-overlay').hide();
        // });

        // // Floor Filter Listener
        // $(document).on('click', 'ul.sidebar-floor-list li', function(e) {
        //   var level = $(e.currentTarget).attr('data-level');
        //   LargescreenDirectory.selectFloor(level);
        //   sidebar.close();
        //   $('div.caret').addClass('up');
        //   $('.sidebar-overlay').hide();
        // });

        // // Menu Button Display Toggle Listener
        // $(document).on('click', '.sidebar-menu-btn', function(e) {
        //   if (sidebar.active) {
        //     sidebar.close();
        //     $('.sidebar-overlay').hide();
        //     $('div.caret').addClass('up');
        //   }
        //   else {
        //     sidebar.open();
        //     $('.sidebar-overlay').show();
        //     $('div.caret').removeClass('up');
        //   }
        // });

        // // Overlay Close Menu Listener
        // $(document).on('click', '.sidebar-overlay', function(e) {
        //     sidebar.close();
        //     $('div.caret').addClass('up');
        //     $('.sidebar-overlay').hide();
        // });
          

          // $scope.sidebar.close();
      }
    },
  };
});