var firstnumber=20;
var secondnumber=10;

var add = firstnumber+secondnumber
console.log(add)

var sub = firstnumber-secondnumber
console.log(sub)

var multi = firstnumber*secondnumber
console.log(multi)

var dev = firstnumber/secondnumber
console.log(dev)

///////////////////////////////////////// if conditions

var grade= document.getElementById("grade")
var check=document.getElementById("check")

check.addEventListener("click",function()

{
    let grade=document.getElementById('grade').value
    if(grade>=90)
    console.log("A");
    else if(grade <=89 && grade>=80)
    console.log("B");
    else if(grade <80 &&grade>70)
    console.log("c");
    else if(grade <70 && grade>=60)
    console.log("F");
    else if(grade <60 )
    console.log("FFF")
    else
    console.log("please insert a number from 0 to 100")

})

/////////////////////////////////////////////////// arrays

var mycolorarray=['blue','red','white']
var emptyarray=[];

console.log(emptyarray)
emptyarray.push("hello");
emptyarray.push("welcome");
emptyarray.push("dude");
console.log(emptyarray)

emptyarray.pop();
console.log(emptyarray)
console.log(emptyarray.length)

var nestedarray=[1,2,3,[100,200,300]]
console.log(nestedarray)

var unorderarray=[1,5,2,7,5]
unorderarray.sort();
console.log(unorderarray)

var stringarray=['mohammed','ali','boda']
stringarray.sort();
console.log(stringarray)


//////////////////////////// objects

let parentobject ={

    mohammed:{
        lenth :23 ,
        house : 'turkey',
        subjects: ['math','english']
    },

    ammar:{
       age:23,
       house : 'jorden',
       subjects: ['math','programming']
    }
}

console.log(parentobject)

//////////////////////////////// loops