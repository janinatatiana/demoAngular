'use strict';

describe('Controller: EventsCtrl', function () {

  // load the controller's module
  beforeEach(module('eventsApp'));

  var EventsCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    EventsCtrl = $controller('EventsCtrl');
  }));

  it('should attach a list of awesomeThings to the scope', function () {
   // expect(EventsCtrl.awesomeThings.length).toBe(3);
  });
});
