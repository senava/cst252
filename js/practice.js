/*
 * Author: Wes Modes <wmodes@csumb.edu>
 * Created: 19 September
 * License: Public Domain
 */

function main(){
  outputElement = document.getElementById("output");
  outputElement.innerHTML = "Your Dream Doesn't Have An Expiration Date. <b> Take a Deep Breath and Try Again.";
}

setTimeout(function(){
  output = document.getElementById("output");
  output.innerHTML = "Click the button below for a quote ^-^";
}, 5000);
