
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
 const name_error=document.getElementById('name_error');
 const email_error=document.getElementById('email_error');
 const password_error=document.getElementById('password_error');
 const password2_error=document.getElementById('password2_error');

 let email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      
 form.addEventListener("submit", function(e) {


           
   if(username.value === '' || username.value == null)

      {
         e.preventDefault();
         name_error.innerHTML = "Name is required";
      }
            if(email.value===""){
                  e.preventDefault();
                 email_error.innerHTML="this email is required";
            
            
            }else if(!email.value.match(email_check)){
                  e.preventDefault();
                  email_error.innerHTML="this email is invalid";
             
            }

            if(password.value===""){
                  e.preventDefault();
                 password_error.innerHTML="this email is required";
            
            }else if(password.value.length  <8){
                  e.preventDefault();
                  password_error.innerHTML="this email should be greater than 8 chracters ";
             
            }

            if(password2.value==""){
                  e.preventDefault();
                  password2_error.innerHTML="this email is required";
            
            }else if(password2!==passwordvalue){
                  e.preventDefault();
                  password2_error.innerHTML="this not the same password";

            }
      }
);






