var price = Number(prompt("Enter Your Price"));
var res = confirm("You have Discount");
if(res){
    price = price - ((price*10)/100);
}
console.log("Discounted Price = "+ price);