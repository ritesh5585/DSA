let prompt = require("prompt-sync")()

let str = prompt("enter your number").trim()
// books-
// grokking algorithm by aditya bhargava
// clean code by robert c martin
// designing data intensive application by martin klappin

// 1. digit analyzer 
function digitAnalyzer(str) {
    let temp = str
    let sum = 0
    let digit = 0
    let evenDigit = ''
    let oddDigit = ''
    let largestDigit = ''

    for (let i = 0; i < temp.length; i++) {
        const num = Number(temp[i])
        let currentDigit = Number(temp[i]);

        digit = i + 1

        if (temp[i] % 2 == 0) {
            evenDigit += temp[i]
        }
        else {
            oddDigit += temp[i]
        }

        if (currentDigit > largestDigit) {
            largestDigit = currentDigit;
        }

        sum += num
    }
    return { sum, digit, evenDigit, oddDigit, largestDigit }
}
console.log(digitAnalyzer(str))

