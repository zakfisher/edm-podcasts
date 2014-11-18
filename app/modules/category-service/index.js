module.exports = angular.module('CategoryService', [])

// Preload categories on boot
.run(function ($http, Preloader, CategoryService) {
  var categoriesTask = Preloader.createTask('Get Categories');
  $http({
    method: 'GET',
    cache: true,
    url: "http://www.westfield.com.au/api/category/master/store-categories/valleyfair.json"
  }).success(function (r) {
    r.unshift({
      name: "All Stores",
      code: null
    });
    CategoryService.setCategories(r);
    categoriesTask.resolve();
  });
})

.service('CategoryService', function () {
  var self = {};
  self.categories = [];

  self.setCategories = function (categories) {
    self.categories = categories;
  };

  self.getCategories = function () {
    return self.categories;
  };

  return self;
});