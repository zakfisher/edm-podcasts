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

  // Redirects
  $urlRouterProvider
    .when('/search', '/search/')
    .otherwise('/');

  // States
  $stateProvider

    .state("screen", {
      url: "/",
      template: require('./ui/screen/screen.html'),
      abstract: true
    })
    
    // Set Home Screen
    .state("screen.home", {
      url: "",
      template: require('./ui/screen/search/search.html')
    })

    .state("screen.search", {
      url: "search/:query",
      template: require('./ui/screen/search/search.html')
    })
    ;

};