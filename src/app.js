'use strict';

angular.module('100das', [
  'ui.router',
  '100das.home',
  '100das.item',
  '100das.about',
  '100das.category'
  ])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  var home = {
    name: 'home',
    url: '/home',
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  }
  var category = {
    name: 'category',
    url: '/category',
    templateUrl: 'category/category.html',
    controller: 'CategoryCtrl'
  }
  var about = {
    name: 'about',
    url:'/about',
    templateUrl:'about/about.html',
    controller: 'AboutCtrl'
  }

  var itemList = {
    name: 'itemList',
    url: '/itemList',
    templateUrl: 'item/item.html',
    controller: 'ItemCtrl'
  }

  var itemDetail = {
    name: 'itemDetail',
    url: '/itemDetail',
    templateUrl: 'item/itemDetail.html',
    controller: 'ItemDetailCtrl'
  }
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state(home)
    .state(category)
    .state(itemList)
    .state(about);
}])
.controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.name = 'world';

}]);