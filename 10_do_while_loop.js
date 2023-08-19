// do while loop

const prompt = require("prompt-sync")();

let n = prompt("Enter the value of n");
n = Number.parseInt(n);

let i = 0;
do {
  console.log(i);
  i++;
} while (i < n);

// Enter the value of n 10
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9