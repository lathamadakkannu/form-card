var firstnamee=document.getElementById("firstname");
//console.log(name);
var lastnamee=document.getElementById("lastname");
//console.log(lastnamee);
var emailid=document.getElementById("email");
//console.log(emailid);
var pass=document.getElementById("password");
//console.log(pass);
var passcheck=document.getElementById("check");
//console.log(passcheck);
var firstcont=document.getElementById("content1");
//console.log(firstcont);
var lastcont=document.getElementById("content2");
//console.log(lastcont);
var emailcont=document.getElementById("content3");
//console.log(emailcont);
var passwordcont=document.getElementById("content4");
//console.log(passwordcont);
var pcontent=document.getElementById("content");
//console.log(pcontent);
var button=document.getElementById("butn");
//console.log(button);


function validation(){

    
    if(firstnamee.value==""){
        
        firstcont.innerHTML="Please Enter Your name";
        firstcont.style.display="block";
        console.log(firstcont);
        return false;
    }
    else{
        firstcont.style.display="none";
    }
    

    
    if(lastnamee.value==""){
        lastcont.innerHTML="Please Enter Your Last Name";
        lastcont.style.display="block";
       return false;
    }
    else{
        lastcont.style.display="none";
    }
    if(emailid.value==""){
        emailcont.innerHTML="Please Enter Your Email";
        emailcont.style.display="block";
        return false;

    }
    else{
        emailcont.style.display="none";
    }
    
    if(pass.value==""){
        passwordcont.innerHTML="Please Enter Your Password";
        passwordcont.style.display="block";
        return false;
    }
    else{
        passwordcont.style.display="none";
    }
    if(pass.value.length<8){
        passwordcont.innerHTML=" Enter 8 Digit Password";
        passwordcont.style.display="block";
        return false;
       
    } 
    else{
        passwordcont.style.display="none";
        

    }
    
    var formname=firstnamee.value;
    localStorage.setItem("userfirstname",formname);
    var formlname=lastnamee.value;
    localStorage.setItem("userlastname",formlname);
    var formemail=emailid.value;
    localStorage.setItem("useremail",formemail);
    var formpword=pass.value;
    localStorage.setItem("userpassword",formpword);

    



    
}
var logn=document.getElementById("goto");
    console.log(logn);
    logn.addEventListener("click",function(){
    location.href="file:///C:/Users/Administrator/fabevy/web%20page/Login%20form/index.html?#";
    })