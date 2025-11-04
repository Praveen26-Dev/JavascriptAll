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


// let emp = {
//      emp_name:"pratima",
//      emp_id:101,
//      emp_designation:"SDE",
//      emp_contact:[6534635,21878552],
//      emp_address:['narayan nagar','ayodhya bypass']

// }
// console.log(emp.emp_address[0])
// console.log(emp.emp_address[1])
// console.log(emp.emp_contact[0])
// console.log(emp.emp_contact[1])

// let ob1={
//     num:[1,2,4,5,6]
// }
// ob1.num.push(3)
// console.log(ob1)

// emp.mail = "pp123@gmail.com"
// emp.emp_name = "Raj"
// console.log(emp)

// for(let v in emp){
//     console.log(v , ':', emp[v])
// }
// print only one key (top key only)

// let studentDetails =[
//     {name:"Raaj",age:12},
//     {name:"Raju",age:22},
//     {name:"Pappu",age:16},
//     {name:"jaggu",age:42},
//     {name:"Sonam",age:32},
//     {name:"Bajwa",age:22},
//     {name:"Ramu",age:12},
//     {name:"Sonu",age:12},
//     {name:"tittu",age:34},
// ]


// for(let v of studentDetails){
//     console.log(v.name+" "+v.age);
// }

let emp={
    name:"Rahul",
    salary:[21000,30000,25000],
    age:21,
    add:function(){
        return 2+3
    },
    emp_account:{
     bank_name:"SBI",
     acc_no:124565432
    }
}
console.log(emp.add())
console.log(emp.salary[2])
console.log(emp.emp_account.bank_name)