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

// let ans = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         let diff = arr[i] - arr[j]; or Math.abs(arr[i]- arr[j])

//         if (diff < 0) {
//             diff = -diff;
//         }

//         ans += diff;
//     }
// }

// console.log(ans);

//solution 2

// const n = arr.length;
// if (n <= 1) return 0;

// arr.sort((x, y) => (x < y ? -1 : x > y ? 1 : 0));

// let prefix = 0;
// let ans = 0;

// for (let i = 0; i < n; i++) {
//     const ai = arr[i];
//     ans += ai * i - prefix;
//     prefix += ai;
// }

// console.log(ans)

// Given an array of integers, update every element
// with the multiplication of the previous and next
// elements with the following exceptions: The first
// element is replaced by the multiplication of the
// first and second. The last element is replaced by
// the multiplication of the last and second last.
// Input Format First line: T (Number of test cases)
// For each test case: First line: N (Size of array)
// Second line: A[O] A[l] ... AIN-I] (Integer array
// elements)

// solution 1
//    const n = arr.length;
//     const result = [];

//     for (let i = 0; i < n; i++) {

//       if (i === 0) {
//         result.push(arr[0] * arr[1]);
//       }

//       else if (i === n - 1) {
//         result.push(arr[n - 1] * arr[n - 2]);
//       }

//       else {
//         result.push(arr[i - 1] * arr[i + 1]);
//       }
//     }

//     return result;

// solution 2

// const n = arr.length;

// if (n === 1) return [arr[0]];

// const res = new Array(n);

// res[0] = arr[0] * arr[1];

// for (let i = 1; i < n - 1; i++) {
//     res[i] = arr[i - 1] * arr[i + 1];
// }

// res[n - 1] = arr[n - 1] * arr[n - 2];

// return res;

// You are given an array of even size. An array is
// said to be balanced if: sum(left half) = =
// sum (right half) Your task is to determine the
// minimum value that must be added to exactly
// ONE element (either in left half or right half) so
// that the array becomes balanced. You may add
// the value to any single element, but only one
// addition operation is allowed. Return the
// minimum value required to make the array
// balanced.

// solution 1

// const n = arr.length;
// const mid = n / 2;

// let leftSum = 0;
// let rightSum = 0;

// for (let i = 0; i < mid; i++) {
//     leftSum += arr[i];
// }

// for (let i = mid; i < n; i++) {
//     rightSum += arr[i];
// }

// console.log( Math.abs(leftSum - rightSum))

// Solution 2

// const mid = Math.floor(arr.length / 2)
// const leftSum = arr.slice(0, mid).reduce((a, b) => a + b, 0);
// const rightSum = arr.slice(mid).reduce((a, b) => a + b, 0);

// // Return absolute difference
// return Math.abs(leftSum - rightSum);

// Sort First Half Asce and Second Half Desc

// const mid = Math.floor(arr.length / 2);

// const left = [];
// const right = [];

// for (let i = 0; i < mid; i++) {
//     left.push(arr[i]);
// }

// for (let i = mid; i < arr.length; i++) {
//     right.push(arr[i]);
// }

// left.sort((a, b) => a - b);
// right.sort((a, b) => b - a);

// return left.concat(right);

