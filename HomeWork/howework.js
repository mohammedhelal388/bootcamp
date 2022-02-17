class Employee{
    constructor(name ,salary,hiredate)
    {
        this.name=name;
        this.salary=salary;
        this.hiredate=hiredate;
    }

    getname()
    {
console.log(this.name.toUperCase());
    }

    getsalary()
    {
        console.log(this.salary);
    }

    gethiredate()
    {
        console.log(this.hiredate);
    }
}

class Manager extends Employee{

    constructor( name,salary,hiredate,descriptionofjop){

        super(name,salary,hiredate)
        this.descriptionofjop=descriptionofjop;

    }
    jopDescription()
   {
    return console.log("the name is :" + this.name +" and the salary is "+ this.salary+ "he was hired in :"+ this.hiredate+ "and his position  is : " + this.descriptionofjop);
  
    }
}

class Designer extends Employee
{
    constructor(name,salary,hiredate, experience){
        super(name,salary,hiredate)
        this.experience=experience;
    }
    yearsexperience()
    {
        return console.log("the name is :" + this.name +" and the salary is "+ this.salary+ "he was hired in :"+ this.hiredate+ "and his experience is : " + this.experience);
    }

}

class saleassociate extends Employee{
    constructor(name,salary,hiredate, degrees){
        super(name,salary,hiredate)
        this.degrees=degrees;
    }

    degreecomplate()
    {
        return console.log("the name is :" + this.name +" and the salary is "+ this.salary+ "he was hired in :"+ this.hiredate+ "and his educational status is : " + this.degrees);

    }
}


let instManager = new Manager("Mr. John Mackally", "12.11.2012", "$6300", "CEO");
  instManager.jopDescription();

let instDesiner = new Designer("Mr. John Mackally", "12.11.2012", "$6300", "12 years")
instDesiner.yearsexperience();

let instSales =new saleassociate("Mr. John Mackally", "12.11.2012", "$6300", "bachelr")
instSales.degreecomplate();