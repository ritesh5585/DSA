let prompt = require("prompt-sync")()
let n = Number(prompt("Give your number here "))

//right anglie triangle start pattern & number

// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         process.stdout.write("* ")
//     }
//     console.log()
// }
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String(j + " "))
    }
    console.log()
}


