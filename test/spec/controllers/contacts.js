'use strict';

describe('Controller: ContactsCtrl', function () {

  // load the controller's module
  beforeEach(module('eventsApp'));

  var contactsCtrl, contactService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _contactService_) {
    contactService = _contactService_;
    //Definiendo espia
    spyOn(contactService, 'getContacts').andReturn([]);

    contactsCtrl = $controller('ContactsCtrl');
  }));

  it('should call contactService.getContacts', function () {
    expect(contactService.getContacts).toHaveBeenCalled();
    expect(contactService.getContacts()).toEqual([]);
  });

  it('should add a contact', function () {
    contactsCtrl.contact = {
      name: 'Janina'
    };

    contactsCtrl.addContact();
    expect(contactsCtrl.contacts).toContain({ name: 'Janina' });
  });
});
