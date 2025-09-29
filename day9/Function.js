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


// function add(){
//     let a = 3
//     let b = 5
//     console.log(a+b)
// }
// add()

// write a program to print any number using funnction
// type 1 -- 
// function table(){
//     let a=parseInt(prompt("enter a number"))
//     for(var i=1;i<=10;i++){
//          console.log(a*i);
//     }
// }
// table()

// types of function -> 

// 2 types ---->
// user defined functions and predefined functions

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


// function cloud(a){
//  console.log(a*a*a)
// }
// cloud(10)
// // write a program to check number is positive or negative using function type 2
// var num = parseInt(prompt("enter a number "))
// chackNum(num)
//  function chackNum(n){
//     if(n>0){
//         console.log("positive")
//     }
//     else{
//         console.log("negative")
//     }
//  }

// function Area(){
//     let l=Number(prompt("Enter Length"));
//     let b =Number(prompt("Enter breadth"));
    
//         alert("Area of Rectangle  "  + l*b)
    
// }

// Area();

// function PrintNum(){
//     let n = Number(prompt("Enter a number between 1 to 20"));
//     if(n>=11&&n<=20){
//         for(let i=20;i>=1;i--){
//             console.log(i);
//         }
//     }
//     else if(n<=10 && n>=1){
//         for(let i=10;i>=n;i--){
//             console.log(i);
//         }
//     }
//     else{
//         console.log("wrong input");
//     }
// }
// PrintNum()


// wap take integer input from user to check even or odd with argument and no return 
// let a = Number(prompt("enter number"));
// EvenOdd(a);
// function EvenOdd(a){
//     if(a%2==0){
//         alert("Number is even ");
//     }
//     else{
//         alert("Odd")
//     }
// }

// wap to print a reverse a table of any number 
let n = Number(prompt("Enter number"))
RevTable(n);

function RevTable(n){
    for(let i=10;i>=1;i--){
        console.log(n*i)
    }
}





