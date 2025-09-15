var arr1=[2,2,3,4,4]
var arr2=[45,65,44,34,35];
function  printDesc(){
    var a = [1,3,2,6,9,7,5]
    a.sort().reverse()
    console.log(a)
}
function useSplice(){
    var a = [1,3,4,5]
    a.splice(1,0,2)
    console.log(a)
}
function Arrays(){
 var arr = arr1.concat(arr2);
console.log(arr)

}

function printElem(){
    console.log(arr2.slice(2,4));
}