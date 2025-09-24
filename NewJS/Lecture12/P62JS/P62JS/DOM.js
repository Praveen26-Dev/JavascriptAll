 
// Normal Function
//  function okk(){

//  }
// okk()

//=============Annonymus Function

// let okk= function(){

//     console.log("Annonymus fun");    

//    }

//    okk()


//============== IIFE 

// (
//     function(){
//         console.log("IIFE");
        
//     }
// )()

  

// ==============Arrow function


let okk=()=>{

    //  let htag=  document.getElementById("heading")
                // document.getElementsByClassName('classname')
         let htag= document.querySelector('#heading')                

     
         htag.innerHTML="This is <b> Batch </b> P62"
        //  htag.textContent="This is <b> Batch </b> P62"


  }


let count=0

  let inc=()=>{

        let Num= document.querySelector("#num")    
        
        Num.style.color="red"
        Num.style.fontSize="50px"
        
        count++
        Num.innerHTML= count   

  }


  let dec=()=>{
        
         let Num= document.querySelector("#num") 

         Num.style.color="blue"
          
         if(count<=0){
              return
           }
         count--
       Num.innerHTML=count  


  }


  

  let colorchange1=()=>{

       let Box= document.querySelector("#box")    
        
       Box.style.backgroundColor="red"

  }

   let colorchange2=()=>{

       let Box= document.querySelector("#box")    
        
       Box.style.backgroundColor="green"

  }


  let hide=()=>{

    let Text= document.querySelector("#text")
     
    // Text.innerHTML=""
    Text.style.backgroundImage="url('./')"


  }



  let changeimg=()=>{

      //  document.querySelector("#imgg").src="./okk.jpeg"
      let okk=  document.querySelector("#imgg")
                okk.src="./okk.jpeg"


  }



  let showw=()=>{

   let Name= Number(  document.querySelector("#name").value )
   let Num= Number(  document.querySelector("#num").value )
    

   alert(Name+Num)   
   

  }