'use strict';

angular.module('eventsApp')
  .controller('ContactsCtrl', contactsCtrl);

function contactsCtrl (contactService) {
  var contactsVm = this;

  contactsVm.showForm = false;
  contactsVm.contact = {};
  contactsVm.contacts = [];
  contactsVm.users = null;
  contactsVm.recibo = null;
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
        contactsVm.users = data;
        console.log("Data>", data);
      }, function (error) {
        console.log(error);
      });

    contactService.autorizacion()
      .then(function (response) {
        contactsVm.recibo = response.data;

        //Utilizacion de lodash para recorrer un objeto o arreglo
        _.forEach(contactsVm.recibo, function (item) {
          console.log(item);
        });

      }, function (error) {

        console.log(error);
      });

    contactService.prueba(true)
      .then(function (data) {

        console.log("Data>", data);
      }, function (error) {
        console.log(error);
      });
  }
}
