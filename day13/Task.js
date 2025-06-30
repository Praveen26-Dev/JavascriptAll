function Red(){
    let h1 = document.getElementById('h1')
    h1.textContent = "Red"
    let body = document.getElementsByTagName('body')
    //document.body.style.backgorundColor = "Red"
    body[0].style.backgroundColor="Red"
}
function Green(){
    let h1 = document.getElementById('h1')
    h1.textContent = "Green"
    let body = document.getElementsByTagName('body')
    body[0].style.backgroundColor="Green"
}

function Yellow(){
let h1 = document.getElementById('h1')
    h1.textContent = "Yellow"
    let body = document.getElementsByTagName('body')
    body[0].style.backgroundColor="Yellow"
}

function changeColor(color){
    let h1 = document.getElementById('h1')
    if(color==='red'){
    h1.textContent='Red'
    document.body.style.backgroundColor = "Red"
    }
    else if(color==='green'){
     h1.textContent = "green"
     document.body.style.backgroundColor = "Green"
    }
    else{
      h1.textContent = "Yellow"
     document.body.style.backgroundColor = "Yellow"
    }

}