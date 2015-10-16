'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('eventsApp'));

  var AboutCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller) {
    AboutCtrl = $controller('AboutCtrl');
  }));

  it('inicializar valores por defecto', function () {
    expect(AboutCtrl.info).toBe(null);
    expect(AboutCtrl.information).toEqual(jasmine.objectContaining({cellphone: '0988194748'}));
  });

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutCtrl.information.cellphone).toBe('0988194748');
  });

  it('deberia llamar al metodo add y asignar el valor pasado como parametro', function () {
    AboutCtrl.add('Hola mundo');
    expect(AboutCtrl.info).toMatch(/hola mundo/i);
  });

  describe('probando metodo construirData', function () {
    it('deberia devolver el objeto completo', function () {
      var data = AboutCtrl.construirData();
      expect(data).toEqual({name: 'janina', phone: '111'});
    });

    it('deberia devolver el objeto completo', function () {
      var data = AboutCtrl.construirData();
      expect(data).toBeDefined();
    });
  });
});
