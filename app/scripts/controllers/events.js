'use strict';

/**
 * @ngdoc function
 * @name eventsApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the eventsApp
 */
angular.module('eventsApp')
  .controller('EventsCtrl', eventsController);

function eventsController() {
  var ev = this;
  //metodos publicos
  ev.title = 'EVENTS';
  return ev;

  //metodos privados

}
