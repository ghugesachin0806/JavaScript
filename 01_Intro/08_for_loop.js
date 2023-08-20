const prompt = require("prompt-sync")();
let n = prompt("Enter the value of n");

n = Number.parseInt(n);
let sum = 0;

for (let i = 0; i < n; i++) {
  console.log(i);
  sum = sum + i;
}

console.log("Sum of first " + n + " natural numbers is " + sum);

let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23,
};

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a]);
}

// For of loop
for (let b of "Harry") {
  console.log(b);
}

// Enter the value of n 6
// 0
// 1
// 2
// 3
// 4
// 5
// Sum of first 6 natural numbers is 15
// Marks of harry are 90
// Marks of shubh are 45
// Marks of shivika are 56
// Marks of ritika are 57
// Marks of shiv are 23
// H
// a
// r
// r
// y
