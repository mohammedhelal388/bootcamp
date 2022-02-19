function loadNews()
{
    var disarea=document.getElementById("response")
    var mynews =new XMLHttpRequest();
  //  console.log(mynews.open("GET","http://192.168.1.241:8081/AJAX/"))
    mynews.open("GET","http://127.0.0.1:5500/AJAX/data.json")
    mynews.onreadystatechange=function(){
        if(mynews.readyState < 4)
        {
            disarea.innerHTML="loadind ..."
        }
        if(mynews.readyState===4 && mynews.status===200){
           // console.log(mynews.responseText)
          // disarea.innerHTML=mynews.responseText

          /// pares function is to get inside the objects and arrays and retrive the inner information
          const parsedata= JSON.parse(mynews.responseText)
          //console.log(parsedata)
          disarea.innerHTML=''
         for(var i=0 ; i<parsedata.data.length; i++)
         {
             disarea.innerHTML=disarea.innerHTML+'<p>'+parsedata.data[i].title +'</p>'
         }
        }

    }
    mynews.send()
}