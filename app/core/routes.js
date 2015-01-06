/* 
  Reference:
  - https://github.com/angular-ui/ui-router/blob/master/sample/app/contacts/contacts.js
  - https://github.com/angular-ui/ui-router/wiki/Quick-Reference#state-1
  - https://github.com/angular-ui/ui-router/wiki#statetransitiontoto--toparams--updatelocationoptions
------------------------------------------------------------- */
module.exports = function ($stateProvider, $urlRouterProvider) {

  /////////////////////////////
  // Redirects and Otherwise //
  /////////////////////////////

  // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
  $urlRouterProvider

    // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
    // Here we are just setting up some convenience urls.
    // .when('/c?id', '/contacts/:id')
    // .when('/user/:id', '/contacts/:id')

    // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
    // Route fallback to home rather than 404'ing
    .otherwise('/');


  //////////////////////////
  // State Configurations //
  //////////////////////////

  var tallViews = {
    'categories': {
      template: require('./ui/screen/tall/states/categories/view.html'),
      controller: 'TallCategoriesCtrl',
    },
    'stores': {
      template: require('./ui/screen/tall/states/stores/view.html'),
      controller: 'TallStoresCtrl'
    },
    'search': {
      template: require('./ui/screen/tall/states/search/view.html'),
      controller: 'TallCategoriesCtrl',
    }
  };

  // Use $stateProvider to configure your states.
  $stateProvider

    //////////////////////////
    // Global Screen States //
    //////////////////////////

    .state('preloader', {
      url: '/',
      template: require('./ui/screen/preloader/view.html'),
      controller: 'PreloaderCtrl'
    })

    ////////////////////////
    // Tall Screen States //
    ////////////////////////
    // * <div ui-view>'s must all live in screen template.
    // * States are managed by the screen service, and
    //   states must go through the screen to access one another.
    .state('tall/categories', {
      url: '/tall/categories/:categoryId',
      views: tallViews
    })
    .state('tall/search', {
      url: '/tall/search/:query',
      views: tallViews
    })
    .state('tall/stores', {
      url: '/tall/stores/:storeId',
      views: tallViews
    })

    ////////////////////////
    // Wide Screen States //
    ////////////////////////

    // .state('wide/map', {
    //   url: '/wide/map',
    //   template: require('./ui/screen/states/wide/map/view.html'),
    //   controller: 'WideMapCtrl'
    // });

    // .state('wide/search', {
    //   url: '/wide/search',
    //   template: require('./ui/screen/states/wide/search/view.html'),
    //   controller: 'WideSearchCtrl'
    // })

    // .state('wide/shopping', {
    //   url: '/wide/shopping',
    //   template: require('./ui/screen/states/wide/shopping/view.html'),
    //   controller: 'WideShoppingCtrl'
    // })

    // .state('wide/dining', {
    //   url: '/wide/dining',
    //   template: require('./ui/screen/states/wide/dining/view.html'),
    //   controller: 'WideDiningCtrl'
    // })

    // .state('wide/services', {
    //   url: '/wide/services',
    //   template: require('./ui/screen/states/wide/services/view.html'),
    //   controller: 'WideServicesCtrl'
    // })

    // .state('wide/events', {
    //   url: '/wide/events',
    //   template: require('./ui/screen/states/wide/events/view.html'),
    //   controller: 'WideEventsCtrl'
    // });

};