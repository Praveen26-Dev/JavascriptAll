let count =0;
function plusOne(){
    let h2 = document.getElementById('h2')
    h2.textContent= ++count;
}

function minusOne(){
    if(count != 0){
    let h2 = document.getElementById('h2')
    h2.textContent= --count;
    }
    
}