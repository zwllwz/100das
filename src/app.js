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
    .state('category.itemList', {
      url: '/itemList',
      templateUrl: 'item/item.html',
      controller: 'ItemCtrl'
    })
    .state('about', {
      url:'/about',
      templateUrl:'about/about.html',
      controller: 'AboutCtrl'
    });
}])
.controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.name = 'world';

}]);