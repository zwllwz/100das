angular.module('100das', [
  'ui.router',
  '100das.header',
  '100das.home',
  '100das.item',
  '100das.about',
  '100das.category'
  ])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  var tab = {
    name: 'tab',
    url: '/tab',
    templateUrl: 'header/header.html',
    controller: 'HeaderCtrl'
  };
  var home = {
    name: 'tab.home',
    url: '/home',
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  };
  var category = {
    name: 'tab.category',
    url: '/category',
    templateUrl: 'category/category.html',
    controller: 'CategoryCtrl'
  };
  var about = {
    name: 'tab.about',
    url:'/about',
    templateUrl:'about/about.html',
    controller: 'AboutCtrl'
  };

  var itemList = {
    name: 'itemList',
    url: '/itemList',
    templateUrl: 'item/item.html',
    controller: 'ItemCtrl'
  };

  var itemDetail = {
    name: 'itemDetail',
    url: '/itemDetail',
    templateUrl: 'item/itemDetail.html',
    controller: 'ItemDetailCtrl'
  };
  $urlRouterProvider.otherwise('/tab');
  $stateProvider
    .state(tab)
    .state(home)
    .state(category)
    .state(itemList)
    .state(about);
}])
.controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.name = 'world';

}]);