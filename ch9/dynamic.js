
function loadname()
{
    $.ajax({
        url:'http://127.0.0.1:5500/ch9/einstein.json',
      
        success:function(data,textstatus,jqXHR){
            console.log(data)
            for(var i=0 ; i<data.data.length; i++)
            {
                $('#response').append('<p>'+data.data[i].name +'</p>'+" "+'<p>'+data.data[i].dateofbirth +'</p>')
                
            }
        },
        
        error:function(jqXHR,textstatus,e)
        {
            $('#response').html(e)
        }
    })
}

function loadbio()
{
    $.ajax({
        url:'http://127.0.0.1:5500/ch9/einstein.json',
      
        success:function(data,textstatus,jqXHR){
            console.log(data)
            for(var i=0 ; i<data.data.length; i++)
            {
                $('#responsebio').append('<p>'+data.data[i].bio +'</p>')
            }
        },
        
        error:function(jqXHR,textstatus,e)
        {
            $('#responsebio').html(e)
        }
    })
}

