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
    
};