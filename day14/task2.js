let btn = document.querySelectorAll('button');
let h3 = document.querySelector('#h3');
let img = document.querySelector('img'); // assuming you have an <img> in your HTML

function changePhotu() {
    img.src = "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=1000";
    h3.innerHTML="Bus"
    h3.style.color = "red";
}

function changeImg(){
    img.src = "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmlrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000";
    h3.innerHTML="Bike"
    h3.style.color = "pink";

}