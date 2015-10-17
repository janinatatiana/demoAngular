'use strict';

describe('Service: contactService', function () {

  // load the service's module
  beforeEach(module('eventsApp'));

  // instantiate service
  var contactService, $httpBackend;
  beforeEach(inject(function (_contactService_, _$httpBackend_) {
    contactService = _contactService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
  });

  it('should do something', function () {
    expect(contactService.getContacts()).toBeDefined();
  });

  it('should do something', function () {
    expect(contactService.getContacts()).toEqual([
      {
        name: 'Janina',
        address: '10 de Agosto'
      },
      {
        name: 'Carla',
        address: 'Loja'
      }
    ]);
  });

  it('should do something', function () {
    var data = [{user: 'cesar'}];
    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/users').respond(data);

    contactService.getUsers()
    .then(function (data) {
      expect(data).toEqual(data)
    });

    $httpBackend.flush();
  });

  it('should do something', function () {
    var data = [{user: 'cesar'}];
    $httpBackend.expectGET('http://jsonplaceholder.typicode.com/comments?postId=1').respond(data);

    contactService.getComments(1)
    .then(function (data) {
      expect(data).toEqual(data)
    });

    $httpBackend.flush();
  });

});
