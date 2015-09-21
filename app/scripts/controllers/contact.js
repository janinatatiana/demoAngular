'use strict';

angular.module('eventsApp')
  .controller('ContactCtrl', contactCtrl);

function contactCtrl (data, $location) {
  var contactVm = this;

  contactVm.contactId = data.id;
  contactVm.returnToContacts = returnToContacts;
  return contactVm;

  function returnToContacts(){
    $location.path('contacts');
  }
}
