module.exports = angular.module('LargescreenSidebar', [])

.service('LargescreenSidebar', function ($famous, $state, $stateParams, $rootScope, CategoryService, LargescreenDirectory) {
  var sidebar = {};

  sidebar.getContentHeight = function () {
    var categoryCount = sidebar.categories.length;
    var floorCount = sidebar.floors.length;
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
  };

  sidebar.show = function() {
    sidebar.scrollview.goToPage(0);
    sidebar.active = true;
  };

  sidebar.hide = function() {
    sidebar.scrollview.goToPage(1);
    sidebar.active = false;
  };

  sidebar.render = function() {
    var Engine     = $famous['famous/core/Engine'];
    var Modifier   = $famous['famous/core/Modifier'];
    var View       = $famous['famous/core/View'];
    var Surface    = $famous['famous/core/Surface'];
    var Transform  = $famous['famous/core/Transform'];
    var ScrollSync = $famous['famous/inputs/ScrollSync'];
    var Scrollview = $famous['famous/views/Scrollview'];

    sidebar.categories = CategoryService.getCategories();
    
    // API call to Jibestream for floor count (from Phiroze)
    // sidebar.floors = JMap.getMaps(function(data) {
    //   console.log('map', data);
    // });

    sidebar.floors = [
      { level: 2 },
      { level: 1 }
    ];

    sidebar.size = [309, undefined];
    sidebar.position = [0, 0, 0];

    // Create Scrollview
    var scrollSync = new ScrollSync();
    sidebar.scrollview = new Scrollview({
      clipSize: 282,
      paginated: true,
      speedLimit: 100,
      drag: 0,
      direction: 0,
      friction: 0,
      pageStopSpeed: 1
    });

    // Create Menu Content View
    var menuView = new View();
    var menuModifier = new Modifier();
    var menuBgSurface = new Surface();
    var menuContentModifier = new Modifier();
    var menuContentSurface = new Surface();
    menuModifier
      .setSize([374, undefined])
      .setTransform(Transform.translate(-100, 0, 0));
      menuBgSurface
        .addClass('sidebar-menu-bg')
        .pipe(scrollSync)
        .pipe(sidebar.scrollview);
      menuContentModifier
        .setAlign([0.62, 0.5])
        .setOrigin([0.5, 0.5])
        .setSize([184, sidebar.getContentHeight()]);
        menuContentSurface
          .addClass('sidebar-menu-content')
          .pipe(scrollSync)
          .pipe(sidebar.scrollview);
    var menuContentNode = menuView.add(menuModifier);
    menuContentNode.add(menuBgSurface);
    menuContentNode.add(menuContentModifier).add(menuContentSurface);

    // Add Menu Content
    var content = '';

    // Categories
    content += '<em>Select a category</em>';
    content += '<ul class="sidebar-category-list">';
    sidebar.categories.forEach(function(category) {
      content += '<li data-code="' + category.code + '">' + category.name + '</li>';
    });
    content += '</ul>';

    // Floors
    content += '<em>Select a floor</em>';
    content += '<ul class="sidebar-floor-list">';
    sidebar.floors.forEach(function(floor) {
      content += '<li data-level="' + floor.level + '">Floor ' + floor.level + '</li>';
    });
    content += '</ul>';

    // Append Markup
    menuContentSurface.setContent(content);

    // Create Menu Button View
    var menuBtnView = new View();
    var menuBtnModifier = new Modifier();
    var menuBtnSurface = new Surface();
    menuBtnModifier
      .setAlign([-0.06, 0.5])
      .setOrigin([0.5, 0])
      .setSize([160, 45])
      .setTransform(Transform.rotateZ(Math.PI / 2));
      menuBtnSurface
        .addClass('sidebar-menu-btn')
        .addClass('txt-center')
        .pipe(scrollSync)
        .pipe(sidebar.scrollview);
    menuBtnView.add(menuBtnModifier).add(menuBtnSurface);

    // Add Menu Button Content
    var btnContent = '';
    btnContent += '<div class="caret up"></div>';
    btnContent += '<p>menu</p>';
    menuBtnSurface.setContent(btnContent);

    // Render
    sidebar.scrollview.sequenceFrom([menuView, menuBtnView]);
    var context = Engine.createContext();
    context.add(sidebar.scrollview);

    // Scroll Event Listeners
    scrollSync.on("update", function() {
      sidebar.active = (sidebar.scrollview.getAbsolutePosition() < 150);
      if (sidebar.active) {
        $('div.caret').removeClass('up');
      }
      else {
        $('div.caret').addClass('up'); 
      }
    });

    // Category Filter Listener
    $(document).on('click', 'ul.sidebar-category-list li', function(e) {
      var code = $(e.currentTarget).attr('data-code');
      LargescreenDirectory.goToCategory(code);
      sidebar.hide();
      $('div.caret').addClass('up');
    });

    // Floor Filter Listener
    $(document).on('click', 'ul.sidebar-floor-list li', function(e) {
      var level = $(e.currentTarget).attr('data-level');
      LargescreenDirectory.selectFloor(level);
      sidebar.hide();
      $('div.caret').addClass('up');
    });

  };

  return sidebar;
})

.directive('largescreenSidebar', function () {
  return {
    restrict: 'E',
    template: require('./largescreen-sidebar.html'),
    controller: function ($scope, $famous, LargescreenSidebar) {
      $scope.sidebar = LargescreenSidebar;
      $scope.sidebar.render();
      $scope.sidebar.hide();
    }
  };
});