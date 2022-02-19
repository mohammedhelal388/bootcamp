
$(document).ready(function(){
    getdata();
})

$('#post-form').submit(function(e){
    e.preventDefault();
    var title=$('#title').val();
    var body=$('#body').val();
    var url=$(this).attr('action')
    console.log(title)
    console.log(body )
    console.log(url)

    try{

        $.ajax({
            url:url,
            type:"POST",
            data:{
                title: title,
                body: body
            }
        }).done(function(data)
        {
            console.log(data)
            $('#post-status').html("post successfully");
            $('#post-status').css("color","green")
            setTimeout(() => {
                $('#post-status').fadeOut()
            }, 3000);             
        
        }).fail(function(err){
            var errmess="failed to post with error code :"+err.status;
            $('#post-status').html(errmess)
            $('#post-status').css("color","red")
            setTimeout(() => {
                $('#post-status').fadeOut()
            }, 3000); 
        })

    }
    catch(err){
console.log(err)
    }
    finally{
     $('#title').val("");
     $('#body').val("");
    }

})



  function getPosts() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      type: "get",
    }).done(function(data) {
      // console.log(data);
      $.map(data, function(post,i) {
        // console.log(post);
        $("#posts-container").append("<h3>"+ post.title+"</h3><p>"+post.body+"</p>");
      })
    })

  }

function getdata()
{
    var disarea=document.getElementById('posts-container')
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/posts"
   
    }).done(function(data)
    {
        for(i=0;i<data.length;i++)
        {
            $('#posttitle').append('<h3>'+data[i].title +'</h3>', '<p>'+data[i].body +'</p>')
          //  $('#posts-container').append('<p>'+data[i].body +'</p>')
          //  console.log(data[i])
        }
        
    }).fail(function(e){
        console.log(e)
    })
    
}



