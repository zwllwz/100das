'use strict';

angular.module('100das', [
  'ui.router',
  '100das.home',
  '100das.item',
  '100das.about',
  '100das.category'
  ])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('welcome', {
      url: '/index',
      templateUrl: 'index.html',
      contrller: 'MainCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    })
    .state('category', {
      url: '/category',
      templateUrl: 'category/category.html',
      controller: 'CategoryCtrl'
    })
    .state('tab.category.item', {
      url: '/item',
      templateUrl: 'item/item.html',
      controller: 'ItemCtrl'
    })
    .state('about', {
      url:'/about',
      templateUrl:'about/about.html',
      controller: 'AboutCtrl'
    });
}])
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.name = 'world';

}]);