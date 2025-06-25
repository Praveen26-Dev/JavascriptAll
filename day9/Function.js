// functions in js
// it is block of code that we can use for later user
// basic syntax == function identifier(){  code  }

// 3 main steps -> function declaration -> function definition -> function calling


// function demo()// declaration 
// //definiton
// {
//  console.log("Inside the function")
// }

// // calling
// demo()
// demo()
// demo()
// demo()
// demo()
// demo()
// demo()
// demo()


function add(){
    let a = 3
    let b = 5
    console.log(a+b)
}
add()

// write a program to print any number using funnction
// type 1 -- 
// function table(){
//     let a=parseInt(prompt("enter a number"))
//     for(var i=1;i<=10;i++){
//          console.log(a*i);
//     }
// }
// table()

// types of function -> user defined functions and predefined functions
// A) user defined functions -> 
// 
// 1. without argument and no return value
// 2. with argument and no return value
// 3. with argument and with return value 
// 4. without argument and with return value

// arguments acts as a input for a functions

// b=9
// let c = type(b)

// function type(b){
//  return b*b
// }

// console.log(c);


function cloud(a){
 console.log(a*a*a)
}
cloud(10)
// write a program to check number is positive or negative using function type 2
var num = parseInt(prompt("enter a number "))
chackNum(num)
 function chackNum(n){
    if(n>0){
        console.log("positive")
    }
    else{
        console.log("negative")
    }
 }




