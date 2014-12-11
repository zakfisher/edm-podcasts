module.exports = angular.module('CategoryService', [])

// Preload categories on boot
.run(function ($http, Preloader, CategoryService) {
  var categoriesTask = Preloader.createTask('Get Categories');
  $http({
    method: 'GET',
    cache: true,
    // url: 'http://api.westfield.io/api/category/master/store-categories/valleyfair.json'
    url: '/cache-data/categories.json'
  }).success(function (r) {
    CategoryService.setCategories(r);
    categoriesTask.resolve();
  });
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