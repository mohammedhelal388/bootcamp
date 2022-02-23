
function loadname()
{
    
    $.ajax({
        
        url:'http://127.0.0.1:5500/ch9/einstein.json',
      
        success:function(data,textstatus,jqXHR){
            console.log(data)
            
                
                $('#response').append('<p>'+data.name +'</p>'+" "+'<p>'+data.dateofbirth +'</p>')
                
            
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
            
                $('#responsebio').append('<p>'+data.bio +'</p>')
            
        },
        
        error:function(jqXHR,textstatus,e)
        {
            $('#responsebio').html(e)
        }
    })
}

