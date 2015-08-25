'use strict'

describe('about controller', function () {
  var ctrl,
    $scope,
    $rootScope;

  beforeEach(function () {
    module('100das.about');
  });

  beforeEach(function () {
    inject(function ($injector) {
      $scope = $injector.get('$scope');
      $rootScope = $injector.get('$rootScope');
    });
  });

  it('test', function () {
    true.should.be.true;
  });

  function createController() {
    ctrl = $controller('AboutCtrl', {
      $scope: $scope
    });
  }
});