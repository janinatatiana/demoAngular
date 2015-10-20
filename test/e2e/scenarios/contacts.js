'use strict';

var contacts = function(){

  this.name = element(by.model('contactsVm.contact.name'));
  this.address = element(by.model('contactsVm.contact.address'));
  this.cellphone = element(by.model('contactsVm.contact.cellphone'));
  this.phone = element(by.model('contactsVm.contact.phone'));

  //this.contacts = element.all(by.repeater('c in objectList'));

  this.newContactButton = element(by.css('[ng-click="newObject()"]'));
  this.addContactButton = element(by.css('[ng-click="contactsVm.addContact()"]'));

  this.addContact = function(){
    this.newContactButton.click();

    this.name.sendKeys('Janina');
    this.address.sendKeys('pass');
    this.cellphone.sendKeys('2578546');
    this.phone.sendKeys('11111');

    this.addContactButton.click();

  };

};

module.exports = new contacts();
