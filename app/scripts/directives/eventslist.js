'use strict';

/**
 * @ngdoc directive
 * @name eventsApp.directive:eventsList
 * @description
 * # eventsList
 */

function eventsList() {
  var directive = {
    templateUrl: 'views/eventsList.html',
    restrict: 'EA',
    scope: {
      objectList: '=',
      newObject: '&',
      titles: '='
    },
    controller: eventsListController,
    controllerAs: 'elVm'
  };

  return directive;

  function eventsListController() {
    var elVm = this;

    elVm.prueba = prueba;
    elVm.contact = contact;
    return elVm;

    function prueba() {
      return true;
    }

    function contact() {
      return {name: 'janina'};
    }
  }
}

angular.module('events.directives')
  .directive('eventsList', eventsList);
