/**
 * Author:  Stephanie Nava
 * Last edited:   03.20.2022
 * License:   Public Domain
 **/

// print all the numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  // For numbers which are multiples of both 3 and 5,
  // print “FizzBuzz”
  // if (i % 15 == 0) {
  //     console.log("FizzBuzz!");
  // }
  var buildStr = "";
  // If the number is a multiple of 2,
  // print "Fizz" instead of the number.
  if (i % 2 == 0) {
      buildStr += "Fizz";
  }

  // If the number is a multiple of 3,
  // print Buzz instead of the number.
  if (i % 3 == 0) {
      buildStr += "Buzz";
  }
  // If the number is a multiple of 5,
  // print Boom instead of the number.
  if (i % 5 == 0) {
      buildStr += "Boom";
  }
  // If the number is a multiple of 7,
  // print Pop instead of the number.
  if (i % 7 == 0) {
      buildStr += "Pop";
  }

  if (buildStr != ""){
    console.log(buildStr + "!");
    $("#output").append("<p>" + buildStr + "!");
  }
  else{
    console.log(i);
    $("#output").append("<p>" + i);
  }
}

$("#output").addClass("columns");
