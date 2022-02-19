
//the same other code just using the jquery 
function loadnews()
{
    // ajax is a function in the jquery to pring multi info instead of one element
    $.ajax({
        url:'http://127.0.0.1:5500/AJAX/data.json',
        //the success function do the onchangestatus function but easier and shorter it test the all stages and if the response is success it pring the result response in a DATA parameters
        // the success function has threr parameters .you can console them to see the result
        //the data contain the response result info
        //the textstatus include the status of the response
        //the jqxhr include the details element of the response
        success:function(data,textstatus,jqXHR){
            console.log(data)
            // we put data.data.length because the response bring the data inside opjects so we need to go through the object
            for(var i=0 ; i<data.data.length; i++)
            {
                //the append function is like .innerhtml it bring the data to the html
                $('#responsenews').append('<p>'+data.data[i].title +'</p>')
            }
        },
        //the error is like the if condition so if the request fails the error function will work and send a message
        //try to console the e because it has the message
        error:function(jqXHR,textstatus,e)
        {
            $('#responsenews').html(e)
        }
    })
}


function loadstudentinfo()
{
    $('#response').load('dynamic.html')
}