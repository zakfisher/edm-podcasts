module.exports = angular.module("BigDirectory", [])

.service('DirectoryContent', function () {
  var self = {};

  self.categories = [];
  self.stores = [];

  return self;
})

.controller("BigDirectory", function ($scope) {
  alert('big directory');
})


//Routes / States
.config(function ($stateProvider) {
  $stateProvider.state('bigdirectory', {
    url: '/bigdirectory',
    template: require('./bigdirectory.html'),
    controller: 'BigDirectory'
  });
});