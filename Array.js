const prompt = require("prompt-sync")();
const input = prompt("Enter numbers separated by commas: "); // e.g. "1,2,3"
const arr = input
    .split(",")
    .map((value) => Number(value.trim()))
    .filter((n) => !Number.isNaN(n));
// Find the Gretest Number

let maxElement = arr[0];
let maxIndex = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
        maxElement = arr[i]; 
        maxIndex = i; 
    }
}

console.log(maxElement, maxIndex)

// function findSecondGreatestElement(numbers) {
//     let max = -Infinity;
//     let secondMax = -Infinity;

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > max) {
//             secondMax = max;
//             max = numbers[i];
//         } else if (numbers[i] > secondMax && numbers[i] !== max) {
//             secondMax = numbers[i];
//         }
//     }

//     return secondMax
// }

// console.log(findSecondGreatestElement(arr))