'use strict';

/**
 * @ngdoc service
 * @name eventsApp.contactService
 * @description
 * # contactService
 * Service in the eventsApp.
 */
angular.module('eventsApp')
  .service('contactService', function () {
    var contacts = [
      {
        name: 'Janina',
        address: '10 de Agosto'
      },
      {
        name: 'Carla',
        address: 'Loja'
      }
    ];

    return {
      getContacts: getContacts
    };

    function getContacts() {
      return contacts;
    }
  });
