'use strict';

angular.module('eventsApp')
  .controller('ContactsCtrl', contactsCtrl);

function contactsCtrl ($rootScope, contactService) {
  var contactsVm = this;

  contactsVm.showForm = false;
  contactsVm.contact = {};
  contactsVm.contacts = [];
  contactsVm.titles = ['Name', 'Address', 'Phone', 'Cellphone'];
  contactsVm.addContact = addContact;
  contactsVm.newContact = newContact;

  getContacts();
  return contactsVm;

  function addContact() {
    contactsVm.contacts.push(contactsVm.contact);
    contactsVm.contact = null;
    contactsVm.showForm = false;
  }

  function newContact() {
    contactsVm.showForm = true;
  }

  function getContacts(){
    contactsVm.contacts = contactService.getContacts();
    contactService.getUsers()
      .then(function (data) {
        console.log(data);
      }, function (error) {
        console.log(error);
      });
  }
}
