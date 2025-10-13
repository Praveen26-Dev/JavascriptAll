// function fun(){
//     let val = document.querySelector('#num1').value
//     alert(val)
// }
function fun(){
    let val1 = parseInt(document.querySelector('#num1').value)
    let val2 = parseInt(document.querySelector('#num2').value)
    let sum = val1+val2
    let h1 = document.querySelector('#asw')
    h1.textContent = sum
    return false
}