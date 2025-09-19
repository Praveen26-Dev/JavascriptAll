// function enterElem(){
//     let h1 = document.querySelector('#h1');
//     h1.innerHTML = "<h1>Hello Praveen I am Super</h1>"
// }

let count = 0;
let h3 = document.querySelector('#counter');

function countInc() {
    count++;
    h3.innerHTML = `<h3>${count}</h3>`;
}

function countDec() {
    
    if(count>0){
          count--;
      }
    h3.innerHTML = `<h3>${count}</h3>`;
}
