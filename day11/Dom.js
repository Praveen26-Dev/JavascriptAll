// Dom --> it is a concept that helps us to change the html content from js 

// the elements in html is known as node in dom.
// 

let a = document.getElementById('h1')

console.log(h1)

// text change
a.textContent = "hello from js for learning DOM"

let b = document.getElementById('h2')
b.innerHTML = "<i> Hello Sir</i>"

// the getElementById returns only single element 

// and the getElementByClassName and getElementByTagName return multiple values in the form of array known as NodeList

// and we have to target their element by their index value

let c =document.getElementsByClassName('h3')
c[0].textContent = "someone is coming"
c[1].textContent = "you are beautiful"



















































































































