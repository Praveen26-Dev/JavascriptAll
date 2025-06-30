//  events are the actions that is perfomed by the user
// 
function fun(){
    alert("You are working with events")
}

function changeText(){
    let head = document.getElementById('head')
    head.textContent = "Ok Buddy"
}

function changeHover(){
    let h2 = document.getElementById('h2')
    h2.textContent = 'Get Lost..'
    h2.style.color = "Red"
}


function changeHello(){
    let h2 = document.getElementById('h2')
    h2.textContent = 'Hello'
    h2.style.color = "black"
}