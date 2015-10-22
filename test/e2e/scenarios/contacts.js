'use strict';

var contacts = function(){

  this.name = element(by.model('contactsVm.contact.name'));
  this.address = element(by.model('contactsVm.contact.address'));
  this.cellphone = element(by.model('contactsVm.contact.cellphone'));
  this.phone = element(by.model('contactsVm.contact.phone'));


  this.newContactButton = element(by.css('[ng-click="newObject()"]'));
  this.addContactButton = element(by.css('[ng-click="contactsVm.addContact()"]'));

  //mesajes
  this.nameError = element(by.css('[ng-show="contact.name.$invalid && contact.name.$touched"]'));
  this.phoneErrorLenght = element(by.css('[ng-show="contact.phone.$error.invalidPhoneLength"]'));

  this.verifyMessages = function(){
    this.newContactButton.click();

    this.name.sendKeys('Janina');
    this.name.clear();

    this.address.sendKeys('pass');

    expect(this.nameError.getText()).toMatch(/obligatorio/i);

    this.cellphone.sendKeys('2578');
    this.phone.sendKeys('11111');
    expect(this.phoneErrorLenght.getText()).toMatch(/Invalid number/i);
    this.addContactButton.click();
  };

};

module.exports = new contacts();
