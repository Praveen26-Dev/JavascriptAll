let arr=[24,73,54,19,20,54,67]
var ceven=0;
var codd=0;
function CountEvenOdd(){
    for(var i =0;i<arr.length;i++){
     if(arr[i]%2==0){
        ceven++;
     }
     else{
        codd++
     }
    }
    console.log("even "+ceven);
    console.log("odd "+codd);
}