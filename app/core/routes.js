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

  // Use $stateProvider to configure your states.
  $stateProvider

    //////////////////////////
    // Global Screen States //
    //////////////////////////

    .state('preloader', {
      url: '/',
      template: require('../ui/states/preloader/view.html'),
      controller: 'PreloaderCtrl'
    })

    ////////////////////////
    // Tall Screen States //
    ////////////////////////

    .state('tall/categories', {
      url: '/tall/categories',
      template: require('../ui/states/tall.categories/view.html'),
      controller: 'PreloaderCtrl'
    })

    .state('tall/search', {
      url: '/tall/search',
      template: require('../ui/states/tall.search/view.html'),
      controller: 'PreloaderCtrl'
    })

    ////////////////////////
    // Wide Screen States //
    ////////////////////////

    .state('wide/map', {
      url: '/wide/map',
      template: require('../ui/states/wide.map/view.html'),
      controller: 'PreloaderCtrl'
    })

    .state('wide/search', {
      url: '/wide/search',
      template: require('../ui/states/wide.search/view.html'),
      controller: 'PreloaderCtrl'
    })

    .state('wide/shopping', {
      url: '/wide/shopping',
      template: require('../ui/states/wide.shopping/view.html'),
      controller: 'PreloaderCtrl'
    })

    .state('wide/dining', {
      url: '/wide/dining',
      template: require('../ui/states/wide.dining/view.html'),
      controller: 'PreloaderCtrl'
    })

    .state('wide/services', {
      url: '/wide/services',
      template: require('../ui/states/wide.services/view.html'),
      controller: 'PreloaderCtrl'
    })

    .state('wide/events', {
      url: '/wide/events',
      template: require('../ui/states/wide.events/view.html'),
      controller: 'PreloaderCtrl'
    });

};