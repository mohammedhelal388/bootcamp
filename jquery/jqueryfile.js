// $(document).ready(function(){

//     $('h1').hide();
// })

$(document).ready(function(){
    $('#eat').click(function(){
        $(this).addClass('blue')
        console.log(this)

    })
})

$(document).ready(function(){
    $('p').click(function(){
        $(this).addClass('red')
    })
})

//this one just to target a specific one element using an id=""
$(document).ready(function(){
    $('#p-pink').click(function(){
        $(this).addClass('pink')

    })
})



$(document).ready(function(){
    $('h1').hover(function(){
         $(this).css("background-color","yellow");
         $(this).css("color","green");
        //$(this).toggleClass('pink')

    },function(){
            $(this).css("background-color","white");
        $(this).css("color","black");
    })
})

$(document).ready(function(){
    $('#only').hover(function(){
        $(this).css("background","gray");
        $(this).css("color","white");
      //  $(this).toggle('pink')


    },function(){
        $(this).css("background","white");
        $(this).css("color","black")
    })
})


// $(document).ready(function(){
//     $('h1').click(function(){
        
//         $(this).addClass('blue')
//         console.log(this)
//     });

// })


