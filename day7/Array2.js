// let ar = ["Praveen ",21,'bhopal',5.8]
// console.log(ar)
// for(let v of ar){
//     console.log(v)
// }
// 
// push used for adding the element from last element 
// ar.push('India')
// console.log(ar)

// ar.push('Mp')
// console.log(ar)

// pop used for removing element from last index
// ar.pop()
// console.log(ar)
// ar.pop()
// console.log(ar)

// unshift for adding value from start index
// ar.unshift('101','PP')
// console.log(ar)
// shif used for removing element from starting index

// ar.shift()
// console.log(ar)

// slice is used for fetching elements from any to index to that index we want 

// var a = ar.slice(1,3)
// console.log(a)

// // splice is used for removing element from middle of array
// let ar11 = ["Praveen ",21,'bhopal',5.8]
// ar11.splice(1,3)
// console.log(ar11)

// ar11.splice(2,1,'sir');
// console.log(ar11)


// Questions based on above functions of arrays
// take element and print table

// let arr=['Cy',2,3,'N'];
// let val = arr.slice(2,3)
// for(var i =1;i<=10;i++){
//     console.log(val[0]*i);
// }

// let arr1 = [1,3,5,2,4,10,11,15]
// var sindex = parseInt(prompt("enter the start value from array"));
// var delemel = parseInt(prompt("enter the elements you want to delete "));

// let a1  = arr1.splice(sindex,delemel)
// console.log(a1)
let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]
for(let v of arr){
    if(v%2===0){
        console.log(v*v);
    }
}


