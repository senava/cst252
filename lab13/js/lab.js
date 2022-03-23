/**
 * Author:  Stephanie Nava
 * Last edited:   03.15.2022
 * License:   Public Domain
 **/

function sortingHat(name){
  // get length of name
  var len = name.length;
  // do a mod 4 to get house
  var mod = len % 4;
  // if conditional to set houseStr to houseStr
  var houseStr;
  if (mod == 0) {
      houseStr = "Gryffindor";
  } else if (mod == 1) {
      houseStr = "Slytherin";
  } else if (mod == 2) {
      houseStr = "Hufflepuff";
  } else if (mod == 3) {
      houseStr = "Ravenclaw";
  }
  // return house txt
  return houseStr;
}

// find button and add click function
$("#button").click(function(){
  debugger;
  //find input id and add variable to it
  var name = $("#input").val();
  // add variable to sortingHat for later usage
  var house = sortingHat(name);
  // print out on console to check
  console.log(house);
  // have results show on #output
  $("#output").html("Congratulations! The Sorting Hat has sorted you into " + house + " !");
})
