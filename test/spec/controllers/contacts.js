'use strict';

describe('Controller: ContactsCtrl', function () {

  // load the controller's module
  beforeEach(module('eventsApp'));

  var contactsCtrl,
    scope, contactService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _contactService_) {
    scope = $rootScope.$new();
    contactService = _contactService_;
    spyOn(contactService, 'getContacts').andReturn([]);

    contactsCtrl = $controller('ContactsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
    expect(contactService.getContacts).toHaveBeenCalled();
  }));

  it('should add a contact', function () {
    contactsCtrl.contact = {
      name: 'Janina'
    };

    contactsCtrl.addContact();
    expect(contactsCtrl.contacts).toContain({ name: 'Janina' });
  });
});
