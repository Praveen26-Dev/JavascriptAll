// type 3 -- with arg and with return value
function demo(a){
    return a+a
}

console.log(demo(10))

let b = demo(30)
console.log(3.14*b*b)

// type 4 -> without arg and return value


function demo1(){
    var a = 25;
    return a*a
}
console.log(demo1());


//H.W.->  What is ES6.
// Arrow Function -> if we want use one liner function 
// denotion ==   1. ()=>{ return }
//               2.  () => ()
            //   3.  () =>
            //   4.     =>
let arrow = ()=>{
    return console.log("hii")
}

arrow()

// Arrow function with parameter
let d = (a) =>{
    return a*a


}

console.log(d(5))

// =========================== OBJECT ===================================

// let comes to the object again

let ob = 
{
    name:"keshav",
    age:43,
    contact:778563,
    address:"Bhopal",
    Location: function(){
        alert("MP nagar")
    },
    country: ()=>{
        console.log("India")
    }
}

ob.Location()
console.log(ob.country())

// WAP to take 3 inputs from the user and and print multiplication 

var num1 = parseInt(prompt("Enter 1st number"));
var num2  = parseInt(prompt("Enter 2st number"))
var num3 = parseInt(prompt("Enter 3st number"))

function multi(a,b,c){
    return a*b*c
}

console.log(multi(num1,num2,num3))

// write a program to take radius from the user and print the area of circle

function cicle(){
 let r = parseInt(prompt("Enter radius"))
 return 3.14*r*r
}

console.log(cicle())