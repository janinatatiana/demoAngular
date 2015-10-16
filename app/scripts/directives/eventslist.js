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

    return elVm;

    function prueba () {
      return true;
    }
  }
}

angular.module('events.directives')
  .directive('eventsList', eventsList);
