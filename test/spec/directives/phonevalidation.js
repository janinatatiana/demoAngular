'use strict';

describe('Directive: phoneValidation', function () {

  // load the directive's module
  beforeEach(module('eventsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<phone-validation ng-model="phone"></phone-validation>');
    element = $compile(element)(scope);
  }));
});
