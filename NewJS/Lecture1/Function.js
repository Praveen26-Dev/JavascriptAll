// Redclaration
// with var keyword redeclration is possible
// 

function Aniket(){
 
//  with var used variable redeclration is possible
 var a =12;
 var a =23;
 console.log(a)
// with let used variable redeclaration is not possible
// but re-assignment in let variable  can be possible
let b =12;
let c =12;



console.log(b);

var a=5;
{
    a = 10;
    console.log(a)
}
console.log(a)
// but with const used variable neither redeclaraton nor re-assignment is possible;
}
Aniket();