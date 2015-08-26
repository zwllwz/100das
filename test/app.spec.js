'use strict'

describe('app.js', function () {
  var ctrl,
    $scope,
    $rootScope;

  beforeEach(function () {
    module('100das');
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
});