/**
 * Author:  Stephanie Nava
 * Last edited:   04.07.2022
 * License:   Public Domain
 **/

// Create a class for vehicles called Vehicle
// takes parameters make, model, year, and color
class Vehicle{
  constructor(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  };
  // Add a method that returns a string with all the information
  info(){
    return "I am a " + this.color + " " + this.year + " " + this.model +  " " + this.make + ".";
  };
};

myVehicles = [];
myVehicle = new Vehicle("Toyota", "Tacoma", "2006", "white");
myVehicles.push(myVehicle);
myVehicles.push(new Vehicle("Monterey-Marina", "Monterey-Salinas Transit bus", "Line 18", "blue and white,"));
myVehicles.push(new Vehicle("'Off the Wall'", "Vans", "2018", "black and white checkered"));

// console.log(myVehicles);

// // For each instantiated object, call your method info() and output the results
// // to your output div.
for(i = 0; i < myVehicles.length; i++){
  $("#output").append("<li>" + myVehicles[i].info() + "</li>");
}

// create click function for Buttons
$(document).ready(function(){
   // toggle div
   $(".challenge-toggle").click(function(){
     $(".challenges").fadeToggle(1200);
     $(".problems").hide();
   });
 });

 $(document).ready(function(){
   // toggle div
   $(".problem-toggle").click(function(){
     $(".problems").fadeToggle(1200);
     $(".challenges").hide();
   });
 });

 $(document).ready(function(){
   // toggle div
   $("#daily-reminder").click(function(){
     $("#character-reminder").fadeToggle(1200);
   });
 });

 $(document).ready(function(){
   // toggle div
   $("#daily-quote").click(function(){
     $("#character-quote").fadeToggle(1200);
   });
 });

 $(document).ready(function(){
    // toggle div
    $(".one-toggle").click(function(){
      $(".step-one").fadeToggle(1200);
      $(".step-four").hide();
    });
  });

  $(document).ready(function(){
     // toggle div
     $(".two-toggle").click(function(){
       $(".step-two").fadeToggle(1200);
       $(".step-one").hide();
     });
   });

  $(document).ready(function(){
    // toggle div
    $(".three-toggle").click(function(){
      $(".step-three").fadeToggle(1200);
      $(".step-two").hide();
    });
  });

  $(document).ready(function(){
     // toggle div
     $(".four-toggle").click(function(){
       $(".step-four").fadeToggle(1200);
       $(".step-three").hide();
     });
   });
