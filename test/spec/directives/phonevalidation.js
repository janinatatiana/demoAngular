'use strict';

describe('Directive: phoneValidation', function () {

  // load the directive's module
  beforeEach(module('eventsApp'));

  var form, scope, $compile;

  beforeEach(inject(function ($rootScope, _$compile_) {
    scope = $rootScope.$new();
    $compile = _$compile_;
  }));


  describe('#validations', function () {
      beforeEach(function() {
          $compile('<form name="form"><input name="phone" phone-validation type="text" ng-model="phone"/></form>')(scope);
          scope.$digest();
          form = scope.form;
      });

      it('should allow only numbers', function () {
          form.phone.$setViewValue('23a');
          expect(form.phone.$valid).toBe(false);
          expect(form.phone.$error.invalidPhone).toBe(true);
      });

      it('length == 7', function () {
          form.phone.$setViewValue('12345');
          expect(form.phone.$valid).toBe(false);
          expect(form.phone.$error.invalidPhoneLength).toBe(true);
      });
  });
});
