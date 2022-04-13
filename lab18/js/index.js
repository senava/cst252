/**
 * Author:  Stephanie Nava
 * Last edited:   04.12.2022
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
