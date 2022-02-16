
class person{

constructor (firstname,secondname){
    this.firstname=firstname
    this.secondname=secondname

}

 run()
 {
     console.log(this.firstname + " " + this.secondname +" " +  "is runing")
 }

 move()
 {
     console.log(this.firstname + " " + this.secondname +" " + "is moving")
 }

 eat()
 {
     console.log(this.firstname + " " + this.secondname +" " + "is eating")
 }

}

let ahmed =new person("ahmed","ali");
ahmed.eat();
ahmed.run();
ahmed.move();

console.log(ahmed)