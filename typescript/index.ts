
interface Person{
    firstName :string;
    lastName?:string
}
interface contact{
    phonenumber:number
    email?:string
}
class ContactCard implements Person,contact
{   
    firstName :string;
    phonenumber: number;

    constructor(firstName :string,phonenumber:number){
       this.firstName=firstName
       this.phonenumber=phonenumber
    }
    

     sendMessage(){
        console.log(this.firstName + " " + this.phonenumber );

    }
}

var newPerson=new ContactCard("Henry",1234567890);
newPerson.sendMessage();