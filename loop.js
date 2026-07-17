let prompt = require("prompt-sync")()
let n = Number(prompt("Give your number here "))

// for (let i = 1; i <= 10; i++) {
//     console.log(n + " * " + i + " = " + n * i)
// }

// ======================================================

// let sum = 0

// for (let i = 1; i <= n; i++) {
//     sum += i
// }
// console.log(sum)

// =========================================================

// function isPrime(n) {
//     if (n < 2) return "Not Prime"

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n % i === 0) return "Not Prime"
//     }
//     return "Prime"
// }

// console.log(isPrime(n))

//================================================================

// function calculatePower(a, b) {
//     // Write your logic here
//     // 0^0 is Undefined
//     if (a === 0 && b === 0) return "Undefined";

//     // Loop for exponent
//     let result = 1;
//     for (let i = 0; i < Math.abs(b); i++) {
//         result *= a;
//     }

//     return result;
// }


// module.exports = { calculatePower };
// ========================================================
// Check if a Number is Strong
// Easy Loop
// Description
// A number is called a strong number if the sum of
// the factorial of its digits is equal to the number
// itself. Write a program that accepts a number
// and checks if it is a strong number. • If n isa
// strong number, print "Yes". • Otherwise, print
// "No".

// function factorial(num) {
//     let result = 1
//     for (let i = 2; i <= num; i++) {
//         result *= i
//     }
//     return result
// }
// function isStrongNumber(n) {
//     let sum = 0

//     let digits = n.toString().split('')

//     for (let digit of digits) {
//         sum += factorial(Number(digit))
//     }

//     return sum === n ? "Yes" : "No";

// }

// module.exports = { isStrongNumber };

// ========================================================
// 6. Reverse a Number
// Description:
// Given a number, write a program to reverse its digits.
// For example, if the number is 1234, the output should be 4321.
// Explanation:
// - We can use a while loop to extract the last digit using modulo 10 (num % 10).
// - We build the reversed number by multiplying the current reversed number by 10 and adding the extracted digit.
// - We then remove the last digit from the original number by dividing it by 10 (Math.floor(num / 10)).

// function reverseNumber(num) {
//     let reversed = 0;
//     // Handle negative numbers by converting to positive and keeping track
//     let isNegative = num < 0;
//     num = Math.abs(num);
//
//     while (num > 0) {
//         let lastDigit = num % 10;
//         reversed = (reversed * 10) + lastDigit;
//         num = Math.floor(num / 10);
//     }
//
//     return isNegative ? -reversed : reversed;
// }
// console.log("Reversed 1234: ", reverseNumber(1234));

