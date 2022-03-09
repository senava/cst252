/**
 * Author:  Stephanie Nava
 * Last edited:   03.05.2022
 * License:   Public Domain
 **/

// sortName() - Function which takes user input and sorts by letter
function sortName(str) {

  // Split string to an array
  str = str.split('');

  // Remove spaces from the array
  for (var i = 0; i < str.length; i++)
  {
   if (str[i] == " ")
   str.splice(i, 1);
  }

 // Sort array, turn back into a String, and return String
 return str.sort().join("");
}

 // find the button element
 buttonEl = document.getElementById("my-button");
 console.log("button element:", buttonEl);
 // find the form element
 inputEl = document.getElementById("user-name");
 console.log("input element:", inputEl);
 // find output element
 outputEl = document.getElementById("output");
 console.log("output element:", outputEl);

 // add an event listener to my-button
 buttonEl.addEventListener("click", function(){
   // get value from name element
   var userName = inputEl.value;
   // modify value - either sort or shuffle
   var newName = sortName(userName);
   // put value in output element
   outputEl.innerHTML = "<p>" + "Did I get your name correctly?" + "<br>" + newName + "</p>";
 });

 // find the button element with in experiment zone
 // special thanks to https://www.w3schools.com/jsref/met_element_addeventlistener.asp
 const element = document.getElementById("button1");
 element.addEventListener("click", myFunction);

 // once experiment button is pressed a phrase will show up
 function myFunction(){
   document.getElementById("demo1").innerHTML = "Hello World";
 }

 // getting element by id for button 2
 const overOut = document.getElementById("button2");
 // adds event once mouse is over the button
 overOut.addEventListener("mouseover", mouseOver);
 // adds event once button is clicked
 overOut.addEventListener("click", mySecondFunction);
 // adds event once mouse is taken of the button
 overOut.addEventListener("mouseout", myThirdFunction);

 // create function when mouse hovers the button
 function mouseOver() {
   document.getElementById("demo2").innerHTML += "Hello!<br>"
 }

 // create function when button is clicked
 function mySecondFunction() {
   document.getElementById("demo2").innerHTML += "That Tickles!<br>"
 }

 // create function when mouse hovers off the button
 function myThirdFunction() {
   document.getElementById("demo2").innerHTML += "Good Bye!<br>"
 }

// create type writter effect once third button is clicked
// special thanks to https://stackoverflow.com/questions/64816798/glitch-effect-with-javascript
const text = 'It\'s All A Nightmare And You Can\'t Wake Up'
const alphaCaps = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', "'"];

const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', "'"];
var output = "";
var progress = 0;
const len = text.length;


function glitch() {
  if (progress >= len) {
    return;
  }
  var randomNums = Math.floor(Math.random() * alpha.length)
  if (alpha[randomNums] == text[progress] || alphaCaps[randomNums] == text[progress]) {
    output += text[progress];
    document.getElementById("demo3").innerHTML = `${output}`
    progress++;
  } else {
    document.getElementById("demo3").innerHTML = `${output}${alpha[randomNums]}`
  }
  requestAnimationFrame(glitch);
}

// just to make it nicer
window.addEventListener("load",function() {
  document.getElementById("button3").addEventListener("click",function() {
    this.hidden=true;
    glitch();
  });
})
