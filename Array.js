let prompt = require("prompt-sync")()
let arr = Number(prompt("Give your number here "))

let sum = 0;

// Loop through each element
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

// Calculate mean (average)
let mean = sum / arr.length;

// Return sum and mean rounded to 1 decimal place
return [sum, mean.toFixed(1)]; 