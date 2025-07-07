let emp = [
    {ename:'Praveen',age:43,city:'Bhopal',contact:9443},
    {ename:'ajju',age:33,city:'rewa',contact:45678543},
    {ename:'rajju',age:23,city:'alligarh',contact:87654343},
    {ename:'ruppu',age:48,city:'indore',contact:87654},
    {ename:'kallu',age:30,city:'jabalpur',contact:456789},
]
// console.log(emp)

// emp.unshift({ename:'Pappu',age:32,city:'Bhopal',contact:98769443})
// console.log(emp)

// let ob = emp.slice(1,2);
// console.log(ob[0])

// Map
let newArray = emp.map((e)=>{return e})
console.log(newArray)
let newArray1 = emp.map((e)=>{return e.ename})
console.log("value of ename "+newArray1)

let newArray2 = emp.map((e)=>{return e})
console.log("value of age "+newArray2)

let newArray3 = emp.map((e)=>{return e.city})
console.log("value of city "+newArray3)

let newArray4 = emp.map((e)=>{return e.contact})
console.log("value of contact "+newArray4)



// Filter method
let newArr5 = emp.filter((e)=>{return e.age>30});
console.log(newArr5)