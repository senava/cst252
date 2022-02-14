/**
 * Author:    Robert Eckhardt and Stephanie Nava
 * Created:   02.13.2022
 *
 * License: Public Domain
 **/

// Variable for current year
var currentYear = new Date().getFullYear();

// Robert's Define Variables
var rMake = "Toyota",
    rModel = "Tacoma",
    rColor = "black",
    rYear = 2007,
    rOwnIt = true;

//Stephanie's Define Variables
var sMake = "Toyota",
    sModel = "Tacoma",
    sColor = "White",
    sYear = 2011,
    sOwnIt = false;

// calculate
var rAge = currentYear - rYear;
var sAge = currentYear - sYear;

// Robert's output
document.writeln("Robert:<br>" +
                "Make: " + rMake + "<br>" +
                "Model: " + rModel + "<br>" +
                "Color: " + rColor + "<br>" +
                "Year: " + rYear + "<br>" +
                "Age: " + rAge + " years<br><br>"
                );

//Stephanie's output
document.writeln("Stephanie: <br>");
document.writeln("Make: " + sMake + "<br>");
document.writeln("Model: " + sModel + "<br>");
document.writeln("Color: " + sColor + "<br>");
document.writeln("Year: " + sYear + "<br>");
document.writeln("Age: " + sAge + " years<br>");
document.writeln("Own it: " + sOwnIt + "<br>");
