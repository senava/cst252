/**
 * Author:  Stephanie Nava
 * Last edited:   03.08.2022
 * License:   Public Domain
 **/

// assigning an element to a variable
var buttonEl = $("#output");

// adding an element at the end of targeted element
$("#output").append("<button id=my-button> Click Here!");

// adding click event to "my-button"
$("#my-button").click(function(){
  alert("HEY YOU! Remember that you are powerful and can take on any challenge that comes your way. ^-^ Have a nice day.");
})

// changing the css properties
$("#my-button").css("background-color", "lightgreen");
$("#my-button").css("color", "blue");
$("#my-button").css("padding", "5px");
$("#my-button").css("font-family", "'Architects Daughter', cursive");
$("#my-button").css("font-size", "18px");

// assigning an element to #experiment
var secondButtonEl = $("#experiment");

// adding multiple elements at the end of targeted element #experiment
$("#experiment").append("<button id=button2> Choose me to change That Guy's color ->");
$("#experiment").append("<button id=button3> Hi o/ I am That Guy");

// changing the css properties
$("#button2").css("padding", "5px");
$("#button3").css("padding", "5px");

// adding click event to button 2 where it changes button 3 color
$("#button2").click(function(){
  $("#button3").css("background-color", "darkviolet");
  $("#button3").css("color", "aliceblue");
});

// adding click event to button 2 where it changes button 3 color
$("#button3").click(function(){
  $("#button2").css("background-color", "blue");
  $("#button2").css("color", "white");
});
