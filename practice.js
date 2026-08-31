let prompt = require("prompt-sync")()

let str = prompt("enter your number")
let reversed = ""

for(let i = 0; i <= str.length; i++){
    reversed = str[i] + reversed
}

// for(let r in str){
//     reversed = str[r] + reversed
// }
console.log(reversed)