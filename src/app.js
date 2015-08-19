'use strict';

angular.module('100das', [
  'ui.router',
  '100das.home',
  '100das.item'
  ])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    })
    .state('item', {
      url: '/item',
      templateUrl: 'item/item.html',
      controller: 'ItemCtrl'
    });
}])
.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.name = 'world';

}]);