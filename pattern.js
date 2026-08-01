let prompt = require("prompt-sync")()
let n = Number(prompt("Give your number here "))

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log()
}
