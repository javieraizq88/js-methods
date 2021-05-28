// For example, the code below will print "Hello World" to the JavaScript console after 2 seconds have passed:

setTimeout(function(){
    console.log("Hello World");
}, 2000);

console.log("setTimeout() example...");


// One second is equal to one thousand milliseconds, so if you want to wait for 3 seconds, you need to pass 3000 as the second argument:
function greeting(){
    console.log("Hello World");
  }
  
  setTimeout(greeting, 3000);

// If you omit the second parameter, then setTimeout() will immediately execute the passed function without waiting at all.
// Finally, you can also pass additional parameters to the setTimeout() method that you can use inside the function as follows:
function greeting(name, role){
    console.log(`Hello, my name is ${name}`);
    console.log(`I'm a ${role}`);
  }
  
  setTimeout(greeting, 3000, "Nathan", "Software developer");

