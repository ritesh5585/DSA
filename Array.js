const prompt = require("prompt-sync")();
const input = prompt("Enter numbers separated by commas: "); // e.g. "1,2,3"
const arr = input
    .split(",")
    .map((value) => Number(value.trim()))
    .filter((n) => !Number.isNaN(n));

// Find the Gretest Number

// let maxElement = arr[0];
// let maxIndex = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//         maxElement = arr[i]; 
//         maxIndex = i; 
//     }
// }

// console.log(maxElement, maxIndex)

// let max = -Infinity;
// let secondMax = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i];
//     } 
// }
// console.log(secondMax)

// Reverse the array

// let temp = new Array(arr.length)
// let i = arr.length - 1

// for (let j = 0; j < temp.length; j++) {
//     temp[j] = arr[i]
//     i--
// }
// console.log(temp)

// let i = 0, j = arr.length - 1
// while (i < j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//     i++
//     j--
// }
// console.log(arr)

// Array Left Rotation by 1

let firstIdx = arr[0]

for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1]
}
arr[arr.length - 1] = firstIdx; 