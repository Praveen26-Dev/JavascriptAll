let arr = [];

// for (let i = 0; i < 5; i++) {
//   let value = prompt(`Enter value ${i + 1}:`);
//   arr[i] = value;
// }

// console.log("Array elements are:");
// for (let i = 0; i < 5; i++) {
//   console.log(arr[i]);
// }
// wap to take 10 inputs from user in array than print sum of all elements
// let sum=0;
// let i;
// for ( i = 0; i < 10; i++) {
//   let value = Number(prompt(`Enter values ${i + 1}:`));
//   arr[i] = value;
  
// }
// for(i=0;i<10;i++){
//     sum=sum+arr[i];
// }
// console.log("Array elements are:");
// for (let i = 0; i < 10; i++) {
//   console.log(arr[i]);
// }
// console.log("sum is: "+sum);

// wap to take 10 inputs from user and store in array than print odd numbers.
let i;
for ( i = 0; i < 10; i++) {
  let value = Number(prompt(`Enter values ${i + 1}:`));
  arr[i] = value;
  
}
for(i=0;i<10;i++){
    if(arr[i]%2==1){
        console.log(arr[i]);
    }
}