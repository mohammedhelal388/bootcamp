var n1=30
var n2=30

console.log(`n1: ${n1} and n2: ${n2}`)
console.log(n1>n2 && n1%2==0)
console.log(n1===n2)
console.log(n1==n2)
console.log(n1>n2)
console.log(n1<n2)
console.log(n1>=n2)
console.log(n1<=n2)
console.log(n1!=n2)
console.log(typeof n1)
console.log(typeof n2)

const time =12
//let greating=(time>12) ? "good morning" :"good evening"

// {
//     greating="good morning"
// }
// else
// {greating = "good evening"
// }
//console.log("greating :"+ greating)

console.log(`greating is : ${(time>6) ? "good evening ":"good morning"}`)

if(n1>n2 || n1%2==0  && n2%2==1)
{
    console.log("valid number")
}

const basicdata={
    surname : "mohammed",
    lastname : "helal"
}
const fulldata ={ ...basicdata.surname +basicdata.lastname}

//console.log(fulldata)

const person ={

    name:"mohammed",
    lastname:"helal",
    jobs:['programmer','trader'],
    setfullname :function()
    {
 return `${this.name} ${this.lastname} ${this.jobs}`
    }
}

const full ={...person.name+person.lastname+person.jobs}

//console.log(full)

const addtwonumbers =(x,y) =>(x+y)
console.log(addtwonumbers(3,4))

const randomnumber = (Math.random()*10)
console.log(randomnumber)