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

// ========================================================
// 7. Fibonacci Sequence
// Description:
// Print the n-th Fibonacci number. The Fibonacci sequence starts with 0 and 1,
// and each subsequent number is the sum of the previous two (0, 1, 1, 2, 3, 5, 8...).
// Explanation:
// - We handle the base cases for n=0 and n=1.
// - We use a loop starting from 2 up to n.
// - We maintain two variables (a and b) representing the two previous numbers in the sequence.
// - In each iteration, we calculate the next number (c = a + b), and update a and b.

// function nthFibonacci(n) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//
//     let a = 0;
//     let b = 1;
//     let current = 0;
//
//     for (let i = 2; i <= n; i++) {
//         current = a + b;
//         a = b;
//         b = current;
//     }
//
//     return current;
// }
// console.log("5th Fibonacci number: ", nthFibonacci(5)); // Output: 5

// ========================================================
// 8. Find Greatest Common Divisor (GCD) / HCF
// Description:
// Find the largest positive integer that divides both a and b without a remainder.
// Explanation:
// - We use the Euclidean algorithm, which is highly efficient.
// - The algorithm repeatedly replaces the larger number by the remainder of dividing the larger by the smaller.
// - We use a while loop that continues as long as b is not 0.
// - In each step, we temporarily store b, update b to a % b, and update a to the temporary b.
// - When b becomes 0, a contains the GCD.

// function findGCD(a, b) {
//     a = Math.abs(a);
//     b = Math.abs(b);
//
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//
//     return a;
// }
// console.log("GCD of 48 and 18: ", findGCD(48, 18)); // Output: 6

//==========================================================

// Sum of Digits of a Number
// Easy Loop Digit Arithmetic
// Description
// Write a program that takes an integer "n" as input and
// computes the sum of its digits. • The input number is always
// positive.

//     // Write your logic here
//     let digit = n.toString().split('')

//     const ans = digit.reduce((sum, current) => sum + Number(current), 0)

//     // console.log(ans)
//     return ans


// module.exports = { sumOfDigits };
//===================================================================

// A number is called an Automorphic number if its
// square ends with the number itself. For example:
// • 25 is Automorphic because: 25'*2 = 625 • The
// last two digits are 25 (which matches the
// number itself). Write a program that accepts a
// positive integer n and checks whether it is an
// Automorphic number. • If n is an Automorphic
// number, print "Yes". • Otherwise, print "No".

//     // Write your logic here
//     let square = n * n
//     const num = square.toString().slice(1)

//     if (n == num) return 'Yes'
//     else return 'No'