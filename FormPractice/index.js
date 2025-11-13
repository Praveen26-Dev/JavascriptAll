

document.querySelector("#naspan");
document.querySelector("#emspan");
document.querySelector("#mospan");
document.querySelector("#paspan");




function fun(){
    let ename=document.querySelector("#name").value

    let email=document.querySelector("#email").value

    let mob=document.querySelector("#mob").value

    let pass=document.querySelector("#pass").value

     if(ename==''){
      document.querySelector("#naspan").innerHTML="<i>Enter Name</i>"
      document.querySelector('#name').focus()
      return false
    } 
    else if(email==''){
        document.querySelector("#emspan").innerHTML="Enter email"
        document.querySelector('#email').focus()
       return false 
    }
    else if(!email.includes("@gmail.com")){
        document.querySelector("#emspan").innerHTML="<i>Enter Correct email</i>"
        document.querySelector('#email').focus()
      return false 
      }
    else if(mob==''){

       document.querySelector("#mospan").innerHTML="<i>Enter Mobile</i>";
       document.querySelector("#mob").focus()
       return false
    }
    else if(pass==''){
      document.querySelector("#paspan").innerHTML="<i>Enter Password</i>";
      document.querySelector('#pass').focus()
      return false
    }
    else if(!pass.match((/[|!@#$%^&*()+]/))){
          document.querySelector("#paspan").innerHTML="Enter Special Character ";
          document.querySelector('#pass').focus()
          return false
    }
    return false;
}