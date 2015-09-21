'use strict';


// angular.module('eventsApp')
//   .controller('AboutCtrl', function ($scope) {
//     $scope.information = {telephone: '072-578-546', cellphone: '0988194748'}
//   });

angular.module('events.controllers')
  .controller('AboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var aboutVm =  this;

    aboutVm.information = {address: 'Jose A. Eguiguren', telephone: '072-578-546', cellphone: '0988194748'};
    aboutVm.add = add;

    return aboutVm;

    function add() {
      return null;
    }

  }
