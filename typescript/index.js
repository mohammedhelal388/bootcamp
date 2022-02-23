"use strict";
class ContactCard {
    constructor(firstName, phonenumber) {
        this.firstName = firstName;
        this.phonenumber = phonenumber;
    }
    sendMessage() {
        console.log(this.firstName + " " + this.phonenumber);
    }
}
var newPerson = new ContactCard("Henry", 1234567890);
newPerson.sendMessage();
