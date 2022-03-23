/**
 * Author:  Stephanie Nava
 * Last edited:   03.10.2022
 * License:   Public Domain
 **/

// find challenge button and add click handler
$("#challenge-button").click(function(){
  debugger;
  //toggle class for challenge area
  $("#challenge-section").toggleClass("challenge");
})

// find problem button and add click handler
// special thanks to https://www.w3schools.com/jquery/jquery_slide.asp
$("#problem-button").click(function(){
  debugger;
  //toggle class for problem area
  $("#content").slideToggle("slow");
})

// add toggle to document between hiding and showing
$(document).ready(function(){
  // find results button and add click handler
  $("#result-button").click(function(){
    debugger;
    // toggle class for messages
    $("#message").toggle("slow");
  })
})

// find button attached click handler
$("#input-button").click(function(){
  debugger;
	// get value of input field
  var inputText = $("#input-text").val();
  // find output #div, add input value
  $("#output").append("<p>" + inputText);
})

// special thanks to https://wmodes.github.io/cst252/lab12/index.html
colorArray = ["#BF045B", "#F28907", "#F2E205", "#09A603", "#17527F", "#485DD9", "#FF5682", "transparent"];

var color1 = 0;
$("#change-button").click(function(){
  debugger;
	$("#experiment").css("color", colorArray[color1]);
	color1++;
	console.log("Current color:", color1, colorArray[color1])
	if (color1 >= colorArray.length) {
		color1 = 0;
	}
});
