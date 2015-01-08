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
  // View Configurations //
  //////////////////////////
  /* 
    Each view has a corresponding <div ui-view> within their screen's template.
      ex: In /core/ui/screen/tall/tall.screen.html, you'll find 
          <div ui-view="categories">, <div ui-view="search">, <div ui-view="stores">

    Each view has a url associated with it (which makes it a state).
      ex: #/tall/categories

    A state is a unique url that is associated with a unique view.

    We include all views on a single screen so that we can hide and show
    different views/states without triggering hard refreshes in the browser.
    Because of this, all views exist within all states.
  ------------------------------------------------------------------- */

  var tallViews = {
    // #/tall/categories
    // <div ui-view="categories">
    'categories': {
      template: require('./ui/screen/tall/states/categories/view.html'),
      controller: 'TallCategoriesCtrl',
    },
    // #/tall/search
    // <div ui-view="search">
    'search': {
      template: require('./ui/screen/tall/states/search/view.html'),
      controller: 'TallSearchCtrl',
    },
    // #/tall/categories/:categoryId
    // <div ui-view="stores">
    'stores': {
      template: require('./ui/screen/tall/states/stores/view.html'),
      controller: 'TallStoresCtrl'
    }
  };

  var wideViews = {
    'dining': {
      template: require('./ui/screen/wide/states/dining/view.html'),
      controller: 'WideDiningCtrl'
    },
    'events': {
      template: require('./ui/screen/wide/states/events/view.html'),
      controller: 'WideEventsCtrl'
    },
    'map': {
      template: require('./ui/screen/wide/states/map/view.html'),
      controller: 'WideMapCtrl'
    },
    'search': {
      template: require('./ui/screen/wide/states/search/view.html'),
      controller: 'WideSearchCtrl'
    },
    'services': {
      template: require('./ui/screen/wide/states/services/view.html'),
      controller: 'WideServicesCtrl'
    },
    'shopping': {
      template: require('./ui/screen/wide/states/shopping/view.html'),
      controller: 'WideShoppingCtrl'
    }
  };

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
      template: require('./ui/screen/preloader/view.html'),
      controller: 'PreloaderCtrl'
    })

    ////////////////////////
    // Tall Screen States //
    ////////////////////////
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
    .state('wide/dining', {
      url: '/wide/dining/:storeId',
      views: wideViews
    })
    .state('wide/events', {
      url: '/wide/events/:eventId',
      views: wideViews
    })
    .state('wide/map', {
      url: '/wide/map',
      views: wideViews
    })
    .state('wide/search', {
      url: '/wide/search/:query',
      views: wideViews
    })
    .state('wide/services', {
      url: '/wide/services/:serviceId',
      views: wideViews
    })
    .state('wide/shopping', {
      url: '/wide/shopping/:storeId',
      views: wideViews
    });

};