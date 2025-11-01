let arr = [];

for (let i = 0; i < 5; i++) {
  let value = prompt(`Enter value ${i + 1}:`);
  arr[i] = value;
}

console.log("Array elements are:");
for (let i = 0; i < 5; i++) {
  console.log(arr[i]);
}