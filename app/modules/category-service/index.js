module.exports = angular.module('CategoryService', [])

// Preload categories on boot
.run(function ($http, Preloader, CategoryService, config, $q, StoreService) {
  var categoriesTask = Preloader.createTask('Get Categories');
  $http({
    method: 'GET',
    cache: true,
    url: "http://api.westfield.io/api/category/master/store-categories/" + config.centre.id + ".json"
    // url: "/cache-data/categories.json"
  }).success(function (r) {
    CategoryService.setCategories(r);
    categoriesTask.resolve();
  });

  //Clear out empty categories
  // var cleanupTask = Preloader.createTask('Category Cleanup');
  // $q.all([Preloader.tasks['Get Stores'], Preloader.tasks['Get Categories']]).then(function () {
  //   console.log('Got stores and categories!');
  //   var allCategories = CategoryService.getCategories();
  //   var populatedCategories = [];
  //   allCategories.forEach(function (category) {
  //     var stores = StoreService.getStoresByCategory(category.code);
  //     console.log(category.code, stores.length);
  //   });
  //   cleanupTask.resolve();
  // });

})

.service('CategoryService', function (filterFilter) {
  var self = {};
  self.categories = [];

  self.setCategories = function (categories) {
    self.categories = categories.slice(0);
  };

  self.getCategories = function () {
    return self.categories.slice(0);
  };

  self.getChildCategoriesOf = function (parentCode) {
    var filteredCategories;

    filteredCategories = filterFilter(self.categories, {
      'code': parentCode
    });
    if (filteredCategories.length === 1) {
      return filteredCategories[0].children.slice(0);
    }
  };

  self.getCategoryByCode = function (code) {
    var categoryModel = false;
    self.categories.forEach(function (category) {
      if (category.code === code) {
        categoryModel = category;
        return;
      }
    });
    return categoryModel;
  };

  return self;
});
