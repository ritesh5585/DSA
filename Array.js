let prompt = require("prompt-sync")();
let input = prompt("Enter numbers separated by commas: "); // e.g. "1,2,3"
let arr = input.split(",").map(Number).filter((n) => !Number.isNaN(n));

// Calculate Sum and Mean of Array
// Elements
// Easy Array
// Description
// Write a program that accepts an integer n from the user,
// creates an array of size n, takes n integer inputs to fill the array,
// and then calculate and return the sum and mean of the array
// elements.

// if (arr.length === 0) {
//     console.log("No valid numbers provided.");
//     process.exit(1);
// }

// let sum = 0;

// // Loop through each element
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// // Calculate mean (average)
// let mean = sum / arr.length;

// // Print sum and mean rounded to 1 decimal place
// console.log([sum, parseFloat(mean.toFixed(1))]);