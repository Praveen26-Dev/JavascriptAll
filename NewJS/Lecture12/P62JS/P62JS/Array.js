 
 function Rashi(){

      // let Fruits= ["Apple","Banana",24, "Grapes"]

      // let fr=["paaya",2]

      // console.log(Fruits.concat(fr));
      
    // console.log(Fruits.slice(1,3));
      

    //   console.log(Fruits.length); 
    //   console.log( Fruits[1] ); to access array elements
      
    //   Fruits.pop()

      // Fruits.push("Mango","Papaya")

      // Fruits.shift()       // remove first element

      //  Fruits.unshift("Mango")
        
      
      // console.log(Fruits);


      // let Fruits= ["Apple","Banana",24, "Grapes"]
      
  
       //splice()

  // Fruits.splice(1,1,"Papaya") ;

  // console.log(Fruits);
  

       let Fruits= [3,6,2,8,7,9]

       console.log(Fruits.sort().reverse());

      //  console.log(Fruits.reverse());


      let arrr= [24,73,54,19,20,54,67]

      var evcount=0
      var odcount=0
      for(var i=0;i<arrr.length;i++){
          if(arrr[i]%2==0){
               evcount++
          }
          else{
               odcount++
          }
      }
      console.log("even "+ evcount)
      console.log("odd "+odcount)
       
           
      

 }