let prompt = require("prompt-sync")()
let n = Number(prompt("Give your number here "))

//right anglie triangle start pattern, number and alphabates

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write(String(j + " "))
//     }
//     console.log()
// }
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         let letter = String.fromCharCode(64 + j)
//         process.stdout.write(letter + " ")
//     } console.log()
// }

// Inverted Right Triangle -
//     Star Pattern

for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log();
}

