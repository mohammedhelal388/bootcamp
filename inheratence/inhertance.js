class mainperson
{

    constructor(firstname,secondname)
    {
        this.firstname=firstname;
        this.secondname=secondname;
    }

   get greating()
    {
     return  console.log(this.firstname +" " + this.secondname + "is greating you from the parent class");
    }
}

class student extends mainperson
{
constructor (studentid,firstname,secondname)
{
    super(firstname,secondname)
    this.studentid=studentid;
    // this.studentfirstname=studentfirstname;
    // this.studentsecondname=studentsecondname;
}

get studentgreating()
{
    return console.log(this.studentid+" "+this.firstname+" "+this.secondname + "is greating you from the student class");
}

}

var info = new student(21,"mohammed","ali");
console.log( info.greating)
console.log( info.studentgreating)