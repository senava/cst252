/**
 * Author:  Stephanie Nava
 * Last edited:   04.20.2022
 * License:   Public Domain
 **/

 $(document).ready(function(){
   // toggle div
   $("#daily-reminder").click(function(){
     $("#talk-reminder").fadeToggle(1200);
   });
 });

$(document).ready(function(){
  // toggle div
  $("#daily-quote").click(function(){
    $("#talk-quote").fadeToggle(1200);
  });
});

// Use API for XKCD
var url = "https://xkcd.com/info.0.json";

// When a user clicks the button
$("#activate").click(getAjax);

// use a jQuery AJAX call to fetch output from XKCD API
function getAjax(){
  // Using the core $.ajax() method
  $.ajax({
      // The URL for the request
      url: url,
      // The data to send (will be converted to a query string)
      // data: { id: 123},
      // Whether this is a POST or GET request
      type: "GET",
      // The type of data we expect back
      // dataType : "json",
  })
  // If the request succeeds
  .done(function( data ) {
      //alert("Success!");
      console.log(data);
      // define variables for object values
      var title = data.title;
      var img = data.img;
      var alt = data.alt;
      // Insert the output in the output div
      $("#output").html("<h2>" + title);
      $("#output").append("<img src=" + img + ">");
      $("#output").append("<p>" + alt);
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
      console.log(errorThrown + " Status:" + status );
  });
}
