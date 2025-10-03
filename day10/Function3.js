// user se input lo integer me --->
//  agar 1 to 5 check it for even odd
//  agar input even hai to sum return karo sum from 1 to 15 
// aur agar wo odd hua to console me print karo
// let n = Number(prompt("Enter a number"))
// function CheckNum(n){
//   if(n>=1&&n<=5){  
//     let sum=0;
//   if(n%2===0){
//     for(let i=1;i<=15;i++){
//         sum+=i;
//     }
//     return sum;
//   }
//   else{
//     console.log(n);
//   }
// }
// else{
//     console.log("enter number from 1 to 5 ");
// }
// }
// console.log(CheckNum(n));


// write a program to take two input from the user to find the area of triangle


function Area(){
  let b=Number(prompt("enter base"));
  let h=Number(prompt("enter height"));
  return 0.5*b*h
}

console.log(Area());