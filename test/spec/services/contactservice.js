'use strict';

describe('Service: contactService', function () {

  // load the service's module
  beforeEach(module('eventsApp'));

  // instantiate service
  var contactService;
  beforeEach(inject(function (_contactService_) {
    contactService = _contactService_;
  }));

  it('should do something', function () {
    expect(contactService.getContacts()).toBeDefined();
  });

});
