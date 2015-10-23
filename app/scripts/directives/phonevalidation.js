'use strict';

/**
 * @ngdoc directive
 * @name eventsApp.directive:phoneValidation
 * @description
 * # phoneValidation
 */
function phoneValidation() {
  var directive = {
      require: 'ngModel',
      link: phoneValidationLink
  };

  return directive;

  function phoneValidationLink(scope, elm, attrs, ctrl) {
    ctrl.$parsers.push(function (viewValue) {
      if (/[^0-9]/g.test(viewValue)) {
          ctrl.$setValidity('invalidPhone', false);
          return undefined;
      } else {
          ctrl.$setValidity('invalidPhone', true);
          return viewValue;
      }
    });

    ctrl.$parsers.push(function (viewValue) {
      if (viewValue.length === 7) {
          ctrl.$setValidity('invalidPhoneLength', true);
          return undefined;

      } else {
          ctrl.$setValidity('invalidPhoneLength', false);
          return viewValue;
      }
    });
  }
}

angular.module('eventsApp')
  .directive('phoneValidation', phoneValidation);


