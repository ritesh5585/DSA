let prompt = require("prompt-sync")()

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

// let marks = [80, 90, 85, 70, 95]
// let length = marks.length

// let total = marks.reduce((arr, acc) => arr + acc, 0)
// // console.log(total/length)

// let num = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1]
// let count = {}
// let max = 0
// let second

// for (let i = 0; i <= num.length; i++) {
//     if(count[num[i]]){
//         count[num[i]]++
//     }else{
//         count[num[i]] = 1
//     }
//     for(let key in count){
//        if(count[key] > max){
//         max = count[key]
//         second = key
//        }
//     }
// }
// console.log(second)

//         let sum = 0
//         let temp = n

//         while( temp > 0) {
//             sum += temp % 10
//            temp = Math.floor(temp / 10);
//         }
//         if (n % sum === 0) {
//         return "Harshad Number";
//     } else {
//         return "Not Harshad Number";
//     }