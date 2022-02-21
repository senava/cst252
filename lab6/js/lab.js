/**
 * Author:    Robert Eckhardt and Stephanie Nava
 * Created:   02.16.2022
 * License: Public Domain
 **/

 //Stephanie's Section
   //Stephanie's Define Variables
   var sMyTransport = ["Monterey-Salinas Transit", "Tacoma Toyota", "Walking"];

   var sMyMainRide = {
       make: "Toyota",
       model : "Tacoma",
       color : "White",
       ownIt: false,
       year : 2006,
       age : function() {
           return 2022 - this.year;
       }
   }

   //Stephanie's output
   document.writeln("Stephanie: <br><br>");
   document.writeln("Kinds of transportation I use: ", sMyTransport, "</br>");
   document.writeln("Main way I get to school: <pre>",
      JSON.stringify(sMyMainRide, null, '\t'), "</pre>");
   document.writeln("The age of my ", sMyMainRide.model, " is ", sMyMainRide.age(),
      " years. <br><br>");

 //Robert's Section
   // Robert's Variables
   var currentYear = new Date().getFullYear();

   var rMyTransport = ["Toyota Tacoma", "Bustin Maestro 37 Longboard", "Specialized Allez Road Bike"];

   var rMyMainRide = {make: "Toyota",
                     model: "Tacoma",
                     color: "black",
                     year: 2007,
                     age: function() {return currentYear - year;}
   };


   // Robert's Output
   document.writeln("Robert:<br><br>Roberts transportation: ");

   // Display rMyTransport array with spaces and commas
   for (var i = 0; i < rMyTransport.length; i++)
   {
     if (i == rMyTransport.length - 1)
       document.writeln(rMyTransport[i] + "<br>");
     else
       document.writeln(rMyTransport[i] + ", ");
   }

   document.writeln("Roberts main ride<pre>",
     JSON.stringify(rMyMainRide, null, '\t'), "</pre>");
