// we have unordered  list having 10 li. the even list have bgc = red

let evenList = document.querySelectorAll('li')
for(var i=0;i<10;i++){
   if(i%2===0){
    evenList[i].style.backgroundColor = 'red'
   }
}
// for increment and decrement code the odd value comes in red color and even value comes in black color 

let h2 = document.querySelector('h2')
let count =0;
function plusOne(){
    h2.textContent= ++count;
    if(count%2==0){
    h2.style.color = 'black'
}else{
    h2.style.color = 'red'
}
}

function minusOne(){
    if(count != 0){
    h2.textContent= --count;
    }
    if(count%2==0){
    h2.style.color = 'black'
    }else{
    h2.style.color = 'red'
  }
}
