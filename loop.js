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