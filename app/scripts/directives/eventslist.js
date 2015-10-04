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
    restrict: 'A',
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
    return elVm;

  }
}

angular.module('events.directives')
  .directive('eventsList', eventsList);
