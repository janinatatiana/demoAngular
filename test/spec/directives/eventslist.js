'use strict';

describe('Directive: eventsList', function () {

  // load the directive's module
  beforeEach(module('eventsApp'));
  beforeEach(module('views/eventsList.html'));

  var element, scope, ctrl;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();

    element = angular.element('<events-list></events-list>');
    element = $compile(element)(scope);
    scope.$digest();
    ctrl = element.controller('eventsList');
  }));

  it('should make hidden element visible', function () {

  });
});
