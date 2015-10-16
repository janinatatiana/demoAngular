'use strict';

/**
 * @ngdoc service
 * @name eventsApp.contactService
 * @description
 * # contactService
 * Service in the eventsApp.
 */
angular.module('eventsApp')
  .service('contactService', function ($http, $q) {
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
      getContacts: getContacts,
      getUsers: getUsers
    };

    function getContacts() {
      return contacts;
    }

    function getUsers() {
      var deferred = $q.defer();
      $http.get('http://jsonplaceholder.typicode.com/users')
        .then(function (data) {

          deferred.resolve(data);
        }, function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }
  });
