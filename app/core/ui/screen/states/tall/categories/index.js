module.exports = angular.module('TallCategories', [])
.controller('TallCategoriesCtrl', require('./tall.categories.controller'))
.service('TallCategories', require('./tall.categories.service'));