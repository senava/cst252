/**
 * Author:  Stephanie Nava
 * Last edited:   02.26.2022
 * License:   Public Domain
 **/

var outputEl = document.getElementById("output");

// Function in which takes a single parameter and adds 19 to it
function adding(x){
   return (x + 19);
 }

// Testing the function adding(x)
console.log("What is 200 + 19?", adding(200));
console.log("What is 1089 + 19?", adding(1089));

// Defining an array of numbers
var array = [1, 5, 200, 600, 2404, 1089, 6, 22, 9]

// Print out on page of my array
console.log("Here is my array ^-^: ", array);

// Using map() on array
var result = array.map(adding);
  // Should return [20, 24, 219, 619, 2423, 1108, 25, 41, 28]
  console.log("x + 19 = ...", result);

// Anonymous function w/ map() to create new operations for array
var result = array.map(function(x){
  return x % 2 == 0;
})
// Should return [false, false, true, true, true, false, true, true, false]
console.log("Eveness of array: ", result);

// Alert box that will show up after 5 sec.
setTimeout(function(){
  window.alert("Please open up the console for this page to see the results ^-^");
}, 5000);

// function to add text to a given element
function main(){
  // get element by id
  outputElement = document.getElementById("output");
  // change contents of element
  outputElement.innerHTML = "Your Dream Doesn't Have An Expiration Date. <b> Take a Deep Breath and Try Again.";
}

// Instruction for button that will show up after 10 sec.
setTimeout(function(){
  // get element by id
  output = document.getElementById("output");
  // message to appear after 10 seconds
  output.innerHTML = "Click the button below for a quote ^-^";
}, 10000);
