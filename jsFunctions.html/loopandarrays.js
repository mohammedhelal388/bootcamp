// var color= ['white','red','blue']
// for(var i=0;i<color.length;i++)
// {

//     console.log(color[i]);


// }
// var j=0
// console.log("@@@@@@@@@@");
// while(j<10)
// {
// console.log(j)
// j++
// }

var years=[1992,1999,2003]
var years2=[1983,1984,2012]

// var j=0

// while(j<years.length)
// {
// console.log(2022-years[j])
// j++
// }

// while(k<years2.length)
// {
// console.log(2022-years2[k])
// k++
// }
// for( var x=0;x < years.length;x++)
// {
//     console.log(2022-years[x])
// }
 function calculateAge(yearsArray)
 {
     var n=0
     var result=[]
     while(n<yearsArray.length)
        {
            
            result.push(2022-yearsArray[n])
             n++
        }
return result
 }
 var yearsAges=calculateAge(years)

 calculateAge(years2)

 var movies=[{
     title:'satr wars',
     publishYear:2015,
     actor:
     ['Feras','Ammar']
     
 },
 {title:'spiderman',
 publichYear:'2022',
 actor:['Adel','leen']
}
]
 for(var x=0;x<movies.length;x++)
 {
     console.log(movies[x].actor)
 }

//  var employes=
//  [
//      {
//      name:'sara',
//      adress:'fhkhkjfvh',
//      kids:['leen','adel']
//     },

//     {
//     name:'amal',
//     adress:'fhkhkytrejfvh',
//     kids:['suliman','sara']
//     },

//     {
//         name:'hala',
//         adress:'aassa we fhkhkytrejfvh',
//         kids:['layan','yazan','amjad']  
//     }
   
// ]
// for(var x=0;x<employes.length;x++)
//  {
//      console.log(employes[x].name)
//  }