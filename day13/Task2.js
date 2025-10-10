// function changeText(){
//     let div = document.getElementById("div");
//     div.style.backgroundColor="Red"
//     div.innerHTML="<h1>Get Lost</h1>"
//     div.style.textAlign ="center"
// }
// function colorChange(){
//     let div = document.getElementById("div");
//     div.style.backgroundColor="Green"
//     div.innerHTML="<h1>Tap Here</h1>"
//     div.style.textAlign ="center"
// }

 let img = document.getElementById('img');
function mobile(){
    img.setAttribute('src','https://m.media-amazon.com/images/I/41X9qNxoJKL._SY300_SX300_QL70_FMwebp_.jpg')
    img.style.height="400px"
    img.style.width="400px"
}

function laptop(){
    img.setAttribute('src','https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D')
    img.style.height="400px"
    img.style.width="400px"
}

function tablet(){
    img.setAttribute('src','https://images.unsplash.com/photo-1542751110-97427bbecf20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0fGVufDB8fDB8fHww')
    img.style.height="400px"
    img.style.width="400px"
}

let imgDiv = document.getElementById('img-div')
imgDiv.style.alignSelf="right"