let prompt = require("prompt-sync")()
let n = Number(prompt("Give your number here"))

for (let i = 1; i <= 10; i++) {
    console.log(n + " * " + i + " = " + n * i)
}