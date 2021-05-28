// Iterate over an array using for loop

let arr = [3, 4, 5, 6];

for (let i = 0; i < arr.length; i++){
  arr[i] = arr[i] * 3;
}

console.log(arr); // [9, 12, 15, 18]


// Iterate over an array using map() method
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]


// Use map() method to iterate over an array of objects
let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];
  
  let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
  
  console.log(userFullnames);
  // ["Susan Steward", "Daniel Longbottom", "Jacob Black"]

//   ########
//   ########
//   ########

// Assigning number value to map() method this argument
  let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
	console.log(this) // 80
}, 80);


// Logging the arguments to see the values

let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
}, 80);


