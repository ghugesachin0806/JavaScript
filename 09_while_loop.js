// while loop
const prompt = require("prompt-sync")();

let n = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 0;
while (i < n) {
  console.log(i);
  i++;
}

// Enter the value of n 5
// 0
// 1
// 2
// 3
// 4
