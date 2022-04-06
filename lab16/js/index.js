/**
 * Author:  Stephanie Nava
 * Last edited:   04.05.2022
 * License:   Public Domain
 **/

// Create a constructor for vehicles called Vehicle, including make, model, year,
// color, and extras.
function Vehicles(make, model, year, color, extras){
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.extras = extras;
  // Add a method info() to your constructor that neatly returns a string with
  // all that information
  this.info = function(){
    var str = "For transportation I " + year + " " + color + " " + make + " " + model + " " + extras + ".";
    return str;
  }
}

// Instantiate objects with your constructor for every vehicle you've ever owned:
var car = new Vehicles("Toyota", "Tacoma", "ride in a 2006", "white", "which my dad drives");
console.log (car.info());

var bus = new Vehicles("Monterey-Salinas Transit", "Line 18: Monterey-Marina", " ride in", "a blue and white", "bus");
console.log (bus.info());

var shoes = new Vehicles("Vans", "'Off the Wall'", "walk around with a pair of", "black and white checkered", "that are a bit dirty");
console.log (shoes.info());

// For each instantiated object, call your method info() and output the results
// to your output div.
 	// we add text (including <p> tags to the end of our output div
	$("#output").append("<li>" + car.info() + "</li>");
	$("#output").append("<li>" + bus.info() + "</li>");
	$("#output").append("<li>" + shoes.info() + "</li>");
