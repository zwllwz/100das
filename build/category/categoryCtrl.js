angular.module('100das.category')
.controller('CategoryCtrl', ['$scope', '$state', function ($scope, $state) {
  $scope.categories = ['category1', 'category2', 'category3', 'category4'];
  $scope.getItems = function () {
  	$state.go('itemList');
  };
}]);