function fun(){
    let Sname = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let contact = document.querySelector('#con').value
    let cls = document.querySelector('#class').value
    let rno = document.querySelector('#rno').value

    let div = document.querySelector('#data')
    div.textContent = Sname + "," + age + " ," + contact + " , " + cls + " ," + rno

    return false
}