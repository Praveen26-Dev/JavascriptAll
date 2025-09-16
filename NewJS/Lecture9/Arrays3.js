var arr=[1,2,7,4,6,9,44]
var max=0;
var sum=0;

// normal function
function sumArr(){
    for(var i=0;i<arr.length;i++){
       sum+=arr[i];
    }
console.log(sum);
}
function Max(){
for(var i=0;i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i]
    }

}
console.log(max);
}

// Anonymous function
let okk = function(){
console.log("first")
}
okk()
// Arrow function 
let arrow=()=>{
    console.log(
        "arrow"
    )
}
arrow();

//IIFE ---> Immediately invoked function expression
(
    function(){
        console.log("IIFE")
    }
)()

