// Challenge 1 DONE
/*  Create a function addTwo that accepts one input and adds 2 to it. */
const addTwo = (num: number): number => {
  return num + 2;
}
console.log(addTwo(3));
console.log(addTwo(10));

// ________________________________________________________________________________________________
// Challenge 2 DONE
/*
Create a function addS that accepts one input and adds an "s" to it.
*/
const addS = (str: string): string => {
  return str + "s";
}
console.log(addS("pizza"));
console.log(addS("bagel"));

// ________________________________________________________________________________________________
// Challenge 3
/*
Create a function called map that takes two inputs:
1. An array of numbers (a list of numbers)
2. A 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
*/
//console.log(map([1, 2, 3], addTwo));

// ________________________________________________________________________________________________
// Challenge 4
/*
The function forEach takes an array and a callback, and runs the callback on each element of the array.
forEach does not return anything.
*/

/* let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet);
*/

// should output abcd

// ________________________________________________________________________________________________
// Challenge 5
/*
Rebuild your map function, this time instead of using a for loop, use your own forEach function that you just defined.
Call this new function mapWith.//console.log(mapWith([1, 2, 3], addTwo));
*/
//console.log(mapWith([1, 2, 3], addTwo)); should output [ 3, 4, 5 ]
