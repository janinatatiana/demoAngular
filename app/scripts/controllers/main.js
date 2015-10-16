'use strict';

angular.module('eventsApp')
  .controller('MainCtrl', mainCtrl);

function mainCtrl () {
  var mainVm = this;

  mainVm.login = login;

  initUser();
  return mainVm;

  function initUser() {
    mainVm.user = {username: '', password: ''};
  }

  function login() {
    console.log('Ingreso a Login');
    var objectTest = {
      name: 'Janina'
    };
    _.extend(objectTest, {
      'email': 'email@gmail.com'
    });

    console.log(objectTest);
  }
}
