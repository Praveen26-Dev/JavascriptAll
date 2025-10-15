// setInterval(function,timer)

let st;
let n=0;
let h1=document.getElementById('h1')
function count(){
st =setInterval(()=>{
    h1.innerHTML=++n;
},1000)
}
function stopCount(){
    clearInterval(st)
}
function resetInt(){
n=0;
h1.innerHTML=n
clearInterval(st)
}