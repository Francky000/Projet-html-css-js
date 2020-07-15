document.querySelector(".hamburger-menu").
addEventListener("click",()=>{
    document.querySelector(".container").classList.toggle("change");
});

document.querySelector("scroll-btn").
addEventListener("click",()=>{
    document.querySelector('html').style.scrollBehavior = "smooth";
    setTimeout(()=>{
        document.querySelector('html').style.scrollBehavior = "unset";
    },1000);
});

function validateForm(){
    var name = document.forms["myForm"]["name"];               
    var email = document.forms["myForm"]["email"];    
    var message = document.forms["myForm"]["message"];  

    if (name.value == "")                                  
    { 
        alert("Veuillez entrez un nom valide");  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }

    if (email.value == "" || email.value.indexOf("@", 0) < 0 || email.value.indexOf(".", 0) < 0)                                
    { 
        alert("Veuillez entrez une adresse mail valide"); 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }
   
    if (message.value == "")                           
    {
        alert("Veuillez entrez un message valide"); 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errormsg').innerHTML="";  
    }
   
    return true; 
}
      
