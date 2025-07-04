
function validate(){
let name = document.querySelector('#name').value
let city = document.querySelector('#city').value
let contact =document.querySelector('#contact').value
let email = document.querySelector('#email').value
let age = document.querySelector('#age').value
let password = document.querySelector('#password').value
if(name==''){
   alert("Please Enter Your Name")
   document.querySelector('#name').focus()
   return false;
}
else if(city==''){
    alert("Please Enter Your city")
   document.querySelector('#city').focus()
   return false;
}
else if(contact==null){
    alert("Please Enter Your contact")
   document.querySelector('#contact').focus()
   return false;
}
else if(contact.length>10||contact.length<10){
   alert("Please Enter 10 digits only")
   document.querySelector('#contact').focus()
   return false;
}
else if(age.length>3){
   alert("Please Enter 10 digits only")
   document.querySelector('#age').focus()
   return false;
}

else if(isNaN(contact)){
   alert("Please Enter nmbers only")
   document.querySelector('#contact').focus()
   return false;
}
// else if(isNaN(age)){
//    alert("Please Enter nubers only")
//    document.querySelector('#age').focus()
//    return false;
// }
  else if(email==''){
    alert("Please Enter Your email")
   document.querySelector('#email').focus()
   return false;
}
 else if(!(email.includes('@'))){
   alert('Enter your valid email')
   document.querySelector('email').focus()
   return false
 }

 else if(! (email.includes('@gmail.com'))||email.includes('@yahoo.com')){
   alert('Enter gmail.com or yahoo.com in email')
   document.querySelector('#email').focus()
   return false
 }
  else if(!(password.match(/[|+_*/@^&#]/))){
   alert('Enter correct password')
   document.querySelector('#password').focus()
   return false
 }
}
