  'use strict';

var contacts = new require('../scenarios/contacts.js');

describe('Contacts', function() {

  describe('new contact', function() {

    it('should add a new contact',  function(){
      browser.get('#/contacts');
      contacts.verifyMessages();
    });
  });
});
