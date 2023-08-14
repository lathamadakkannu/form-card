var lemai=document.getElementById("email");
//console.log(emai);
var lpass=document.getElementById("password");
//console.log(pass);
var button=document.getElementById("butn");
//console.log(button)

button.addEventListener("click", function(){
 var email=lemai.value;
 var password=lpass.value;
 var emaillocation=localStorage.getItem("useremail");
 var passlocation=localStorage.getItem("userpassword");

 if(email==emaillocation){
    if(password==passlocation){
   alert ("Your Form is Login successfully")
 }
 else{
  alert("Password is incorrect")
 }
}
 else{
  alert( "Email id is incorrect")
 }


})
var card=document.getElementById("process");
    console.log(card);
    card.addEventListener("click",function(){
    location.href="file:///C:/Users/Administrator/fabevy/web%20page/Card%20section/index.html";
    


  })