// localStorage => the storage inside the browser for storing data related to user
// ===> key-value pair in form of String 
// four main function
// setItem() -> saves data into localStorage
// getItem() -> access data
// removeItem() -> at one time one item would be removed
// clear() -> pura localStorage khali ker dega

localStorage.setItem("username","Rahul")
localStorage.setItem("userAge","21")
localStorage.setItem("userAdd","Bhopal")
localStorage.setItem("userBlg","B+")
localStorage.setItem("userCon","9876543")

//getItem()

let age =localStorage.getItem("userAge")
console.log(age)

// removeItem()

// localStorage.removeItem("userBlg")

// clearItem

// localStorage.clear()
let person={
    name:"praveen",
    age:20,
    blg:"B+"
}
localStorage.setItem("userData",JSON.stringify(person))
let data=JSON.parse(localStorage.getItem("userData"))
console.log(data)