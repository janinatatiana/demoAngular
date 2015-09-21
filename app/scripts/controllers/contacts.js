'use strict';

angular.module('eventsApp')
  .controller('ContactsCtrl', contactsCtrl);

function contactsCtrl () {
  var contactsVm = this;

  contactsVm.showForm = false;
  contactsVm.contact = {};
  contactsVm.contacts = [];
  contactsVm.addContact = addContact;
  contactsVm.newContact = newContact;

  return contactsVm;

  function addContact() {
    contactsVm.contacts.push(contactsVm.contact);
    contactsVm.contact = null;
    contactsVm.showForm = false;
  }

  function newContact() {
    console.log('newContact');
    contactsVm.showForm = true;
  }
}
