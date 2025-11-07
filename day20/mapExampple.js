// map---> it is method of array which takes a callback and picks elements from the array and return all elements into a new array
// syntax --> 
// arr.map((e)=>{
//            return e
//            });
arr=[{name:"praveen",age:21},{name:"raaj",age:33},{name:"Rahul",age:12}]
// let res = arr.map((e)=>{
//     return e.name
// })
// console.log(res)

// map does not return values based on some condition. To handle we have filter method of array.

let res=arr.filter((e)=>{
    return e.age>18
});
console.log(res)

// destructuring
let [ename,c,co,st]=["Praveen","maihar","India","MP"]
console.log(ename,c,co,st);


// spread --> ...

let a1=[1,2,3,4,5]
let a2=[...a1,6,7,8,9]

