/**
 * Author:    Robert Eckhardt and Stephanie Nava
 * Last edited:   02.22.2022
 *
 * License: Public Domain
 **/

 // Prompt user to enter their name and store value
 var userName = window.prompt("Please enter your name:");

// sortName() - Function which takes user input and sorts by letter
function sortName(str) {

  // Split string to an array
  str = str.split('');

  // Remove spaces from the array
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] == " ")
    str.splice(i, 1);
  }

  // Sort array, turn back into a String, and return String
  return str.sort().join("");
}

// Display sorted name
document.writeln("Your name sorted: " + sortName(userName));
