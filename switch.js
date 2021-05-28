
// A simple switch statement in action
var score = 20;

switch(age){
    case 10:
        console.log("Score value is 10");
        break;
    case 20:
        console.log("Score value is 20");
        break;
    default:
        console.log("Score value is neither 10 or 20");
}



// A switch statement accepting different expressions
var age = 29;

switch(age){}
// or
switch(true){}
switch("A string"){}
switch(5+5){}




// Another switch statement example with flowers
var flower = "tulip";

switch (flower){
    case "rose":
        console.log("Roses are red");
        break;
    case "violet":
        console.log("Violets are blue");
        break;
    case "sunflower":
        console.log("Sunflowers are yellow");
        break;
    default:
        console.log("Please select another flower");
}



// The switch statement without break keyword
var flower = "rose";

switch (flower){
    case "rose":
        console.log("Roses are red");
    case "violet":
        console.log("Violets are blue");
    case "sunflower":
        console.log("Sunflowers are yellow");
    default:
        console.log("Please select another flower");
}

// #########
// #########

// A simple if..else statement example
var score = 70;

if(score > 50){
  console.log("Score is higher than 50");
} else {
  console.log("Score is 50 or lower");
}