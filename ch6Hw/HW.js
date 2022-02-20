var name2 = document.getElementById('name')
var lname=document.getElementById('lname')
var check2= document.getElementById('check')
var regularex=/^[A-Z][a-z][A-z]$/
function regexChecker()
{
if(!name2.value.match(regularex)&&!lname.value.match(regularex))
{
    alert("Oh no! Thats an invalid format!")

}
else if (name2.value.match(regularex))
{
    alert("Yay! Your inputs were all correct!")

}
}