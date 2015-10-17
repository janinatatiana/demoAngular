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
      getUsers: getUsers,
      getComments: getComments,
      autorizacion: autorizacion,
      prueba: prueba
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

    function getComments(id) {
      var deferred = $q.defer();
      $http.get('http://jsonplaceholder.typicode.com/comments?postId='+ id)
        .then(function (data) {
          if(data) {
            deferred.resolve(data);
          } else {
            deferred.resolve('Data vacia');
          }
        }, function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function autorizacion () {
      var deferred = $q.defer();
      $http.get('http://192.168.1.3:8080/e-voucher/wsapi/comprobantes/AUTORIZADO/001-013-000000284/01/empresa/1160001130001')
        .then(function (data) {
          deferred.resolve(data);
        }, function (error) {
          deferred.reject(error);
        });

      return deferred.promise;
    }

    function prueba(flag) {
      var deferred = $q.defer();
      if (flag) {
        deferred.resolve(flag);
      } else {
        deferred.reject(flag);
      }
      return deferred.promise;
    }
  });
