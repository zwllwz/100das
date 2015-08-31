angular.module('100das.category', [])
.config(['$stateProvider', function ($stateProvider) {
  var itemDetail = {
    name: 'tab.itemDetail',
    url: '/itemDetail',
    templateUrl: 'item/itemDetail/itemDetail.html',
    controller: 'ItemDetailCtrl'
  }

  $stateProvider
    .state(itemDetail);
}]);
