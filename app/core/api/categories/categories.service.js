module.exports = function ($http, Hardware, filterFilter) {
  var self = {};

  self.preload = function () {
    var req = $http({
      method: 'GET',
      cache: true,
      url: 'http://api.westfield.io/api/category/master/store-categories/' + Hardware.get().centre.id + '.json'
    });
    req.success(function (r) {
      self.set(r);
    });
    return req;
  };

  self.set = function (categories) {
    self.categories = categories;
  };

  self.get = function () {
    return self.categories;
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
};