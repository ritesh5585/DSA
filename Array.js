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

// let firstIdx = arr[0]

// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1]
// }
// arr[arr.length - 1] = firstIdx; 

// Move Zeros

// const n = arr.length;

// const res = new Array(n);

// let i = 0;
// let j = n - 1;

// for (let k = 0; k < n; k++) {
//     if (arr[k] > 0) {
//         res[i++] = arr[k];
//     } else {
//         res[j--] = arr[k];
//     }
// }

// return res;

// // solution two
// let result = []

// for (let num of arr) {
//     if (num == 1)
//         result.push(num);
// }

// for (let num of arr) {
//     if (num == 0)
//         result.push(num);

// }
// return result

// You are given a sequence of integers.Your task is
// to compute the sum of absolute differences
// between every pair of elements in the sequence
// where the first element appears before the
// second.More formally, for a given array of
// integers arr of length n, you must compute the
// total value: For all pairs(i, j) such that 0 s i < j < n,
//     add larr[i] - arr[j]l to the sum.The absolute
// difference between two numbers is defined as
//     the non - negative value of their difference,
//         regardless of order.The input may contain
// duplicate values, negative numbers, or zeros.
// The order of elements in the input is fixed and
// must not be rearranged.Your program must
// process the input exactly as provided and output
// a single integer representing the computed sum.

let ans = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let diff = arr[i] - arr[j];

        if (diff < 0) {
            diff = -diff;
        }

        ans += diff;
    }
}

console.log(ans);