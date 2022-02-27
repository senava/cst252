/**
 * Author:  Stephanie Nava
 * Last edited:   02.26.2022
 * License:   Public Domain
 **/

function isEven(x){
    return (x % 2 == 0);
}

console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));

array = [100, 81, 43, 854, 21, 10000]
console.log("My array is", array);

var result = array.map(isEven);
console.log("Test of eveness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})

console.log("Squareroot of array:", result);
