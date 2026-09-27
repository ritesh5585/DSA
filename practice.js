let prompt = require("prompt-sync")()

let input = prompt('whats in your mind- ')
const arr = input
    .split(",")
    .map((value) => Number(value.trim()))
    .filter((n) => !Number.isNaN(n));
console.log(arr)

// let str = prompt("enter your number").trim()
// books-
// grokking algorithm by aditya bhargava
// clean code by robert c martin
// designing data intensive application by martin klappin

// 1. digit analyzer
// function digitAnalyzer(str) {
//     let temp = str
//     let sum = 0
//     let digit = 0
//     let evenDigit = ''
//     let oddDigit = ''
//     let largestDigit = ''

//     for (let i = 0; i < temp.length; i++) {
//         const num = Number(temp[i])
//         let currentDigit = Number(temp[i]);

//         digit = i + 1

//         if (temp[i] % 2 == 0) evenDigit += temp[i]
//         else oddDigit += temp[i]

//         if (currentDigit > largestDigit) largestDigit = currentDigit;

//         sum += num
//     }

//     for (const num of digits) {
//         sum += num;
//         if (num % 2 === 0) evenDigit++;
//         else oddDigit++;
//         if (num > largestDigit) largestDigit = num;
//     }
//     return { sum, digit, evenDigit, oddDigit, largestDigit }
// }
// // console.log(digitAnalyzer(str))

// // function comp(str) {
// //     if (!str || str.length === 0) return "";

// //     let result = [];
// //     let count = 1;

// //     for (let i = 0; i < str.length; i++) {
// //         if (str[i] === str[i + 1]) {
// //             count++;
// //         } else {
// //             result.push(`${str[i]}x${count}`);
// //             count = 1
// //         }
// //     }
// //     return result
// // }

// function comp(str) {
//     return str
//         .match(/(\d)\1*/g)
//         .map(group => `${group[0]}x${group.length}`)
// }



// console.log(comp(str))

// let arr = [100, 250, 500, 150, 700]
// let temp = arr
// let ans = temp.filter(amt => amt > 300)
// // console.log(ans)

// let marks = [100, 250, 500, 150, 700]

// let temp = marks

// let ans = temp.reduce((acc, sum) => acc + sum, 0)
// console.log(ans/marks.length)

// find the count of numbers from the array

let temp = arr

const countArray = (temp) => {
    return temp.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1
        return acc
    }, {})
}

const counting = (temp) => {
    let count = {}
    for (num of temp) {
        if (count[num]) {
            count[num]++
        } else {
            count[num] = 1
        }
    }
    return count
}

console.log(counting(temp))

const countBruteForce = (temp) => {
    let result = {}

    for(let i = 0; i < temp.length; i++){
        let element = arr[i]
        if(result(element)){
            result(element)++
        }else{
            result(element) = 1
        }
        return result
    }
}

console.log(counting(temp))
