/**
 * Author:  Stephanie Nava
 * Last edited:   03.01.2022
 * License:   Public Domain
 **/

// getting an element by id
var outputEl = document.getElementById("result");
var outputEl = document.getElementById("quote");

// creating new elements with createElement
var oneEl = document.createElement("button");
var twoEl = document.createElement("button");
var thirdEl = document.createElement("button");

// each new element appended to outputEl w/ appendChild()
outputEl.appendChild(oneEl);
outputEl.appendChild(twoEl);
outputEl.prepend(thirdEl);

// should be able to see on console
  // see styling for result on console
  console.log(result);
  // see styling for oneEl on console
  console.log(oneEl);
  // see styling for twoEl on console
  console.log(twoEl);
  // see styling for thirdEl on console
  console.log(thirdEl);

// styling for oneEl
  // setting new id
  oneEl.id = "click button-1";
  // text
  oneEl.innerHTML = "Hello!";
  // font size
  oneEl.style.fontSize = "15pt";
  // background color
  oneEl.style.background = "#f6bbda";
  // padding sizing
  oneEl.style.padding = "5px 30px";
  // border styling
  oneEl.style.borderRadius = "20px";
  // margin sizing
  oneEl.style.margin = "15px 15px";
  // change of cursor
  oneEl.style.cursor = "pointer";
  // change of font style
  oneEl.style.fontFamily = "'Gloria Hallelujah', cursive";


// styling for twoEl
  // setting new id
  twoEl.id = "click button-1";
  // text
  twoEl.innerHTML = "How are you?";
  // font size
  twoEl.style.fontSize = "15pt";
  // background color
  twoEl.style.background = "#f6bbda";
  // padding sizing
  twoEl.style.padding = "10px 20px";
  // border styling
  twoEl.style.borderRadius = "20px";
  // margin sizing
  twoEl.style.margin = "15px 15px";
  // change of cursor
  twoEl.style.cursor = "pointer";
  // change of font style
  twoEl.style.fontFamily = "'Gloria Hallelujah', cursive";

// styling for thirdEl
  // setting new id
  thirdEl.id = "click button-1";
  // text
  thirdEl.innerHTML = "Click Here!";
  // font size
  thirdEl.style.fontSize = "15pt";
  // background color
  thirdEl.style.background = "#f6bbda";
  // padding sizing
  thirdEl.style.padding = "10px 20px";
  // border styling
  thirdEl.style.borderRadius = "20px";
  // margin sizing
  thirdEl.style.margin = "15px 15px";
  // change of cursor
  thirdEl.style.cursor = "pointer";
  // change of font style
  thirdEl.style.fontFamily = "'Gloria Hallelujah', cursive";

// function for getting an innerText
// special thanks to https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innerhtml_innertext
function quoteOne(){
  let text = document.getElementById("experiment").innerText;
      // return the text content of the element
      document.getElementById("demo").innerText = text;
}

// adding an event which allows user to click anywhere w/in the area
// special thanks to https://www.w3schools.com/jsref/prop_style_backgroundimage.asp
document.addEventListener("click", function(){
    // change of background image when page is clicked
    document.body.style.backgroundImage = "url('../img/sky.jpeg')";
})
