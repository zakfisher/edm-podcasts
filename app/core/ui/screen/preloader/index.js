module.exports = angular.module('LoadingScreen', [])
.controller('PreloaderCtrl', require('./preloader.controller'))
.service('Preloader', require('./preloader.service'));