'use strict';


// angular.module('eventsApp')
//   .controller('AboutCtrl', function ($scope) {
//     $scope.information = {telephone: '072-578-546', cellphone: '0988194748'}
//   });

angular.module('events.controllers')
  .controller('AboutCtrl', aboutCtrl);

  function aboutCtrl() {
    var aboutVm =  this;

    aboutVm.add = add;
    aboutVm.construirData = construirData;
    init();
    return aboutVm;

    function add(data) {
      aboutVm.info = data;
    }

    function init() {
      aboutVm.info = null;
      aboutVm.information = {address: 'Jose A. Eguiguren', telephone: '072-578-546', cellphone: '0988194748'};
    }

    function getData() {
      return {name: 'janina'};
    }

    function construirData () {
      var data = getData ();
      data.phone = '111';
      return data;
    }
  }
