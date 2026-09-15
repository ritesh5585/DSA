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

        if (temp[i] % 2 == 0) evenDigit += temp[i]
        else oddDigit += temp[i]

        if (currentDigit > largestDigit) largestDigit = currentDigit;

        sum += num
    }

    for (const num of digits) {
        sum += num;
        if (num % 2 === 0) evenDigit++;
        else oddDigit++;
        if (num > largestDigit) largestDigit = num;
    }
    return { sum, digit, evenDigit, oddDigit, largestDigit }
}
// console.log(digitAnalyzer(str))

function comp(str) {
    if (!str || str.length === 0) return "";

    let result = [];
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result.push(`${str[i]}x${count}`);
            count = 1
        }
    }
    return result
}

console.log(comp(str))

