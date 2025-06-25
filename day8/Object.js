// object is unordered datatype
// var name = prompt("Enter a name")
// var contact = parseInt(prompt("enter your contact no"))
// var city = prompt("enter your city")


// let ob ={
//     name:name,
//     contact:contact,
//     city:city
// }
// console.log(ob)
// console.log(ob.city)

// let emp = {
//      emp_name:"pratima",
//      emp_id:101,
//      emp_designation:"SDE",
//      emp_contact:[6534635,21878552]
// }
// console.log(emp.emp_contact[1])


let emp = {
     emp_name:"pratima",
     emp_id:101,
     emp_designation:"SDE",
     emp_contact:[6534635,21878552],
     emp_address:['narayan nagar','ayodhya bypass']

}
console.log(emp.emp_address[0])
console.log(emp.emp_address[1])
console.log(emp.emp_contact[0])
console.log(emp.emp_contact[1])

let ob1={
    num:[1,2,4,5,6]
}
ob1.num.push(3)
console.log(ob1)

emp.mail = "pp123@gmail.com"
emp.emp_name = "Raj"
console.log(emp)

for(let v in emp){
    console.log(v , ':', emp[v])
}
// print only one key (top key only)