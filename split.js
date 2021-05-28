let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2);

console.log(days); // ["Monday", "Tuesday"]

// Remove only one element from the array
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 1);

console.log(days); // ["Monday"]
console.log(months); // ["January", "February", "Tuesday"]


// Using splice() to both remove and add elements to an array
let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2, 2, "March", "April");

console.log(days); // ["Monday", "Tuesday"]
console.log(months); // ["January", "February", "March", "April"]


// The splice() method called without returning any elements
let months = ["January", "February", "Monday", "Tuesday"];
months.splice(2, 0, "March");

console.log(months); 
// ["January", "February", "March", "Monday", "Tuesday"]

