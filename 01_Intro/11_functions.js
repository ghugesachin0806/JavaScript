/////////////////////// Normal Function //////////////////////////////////////////

function square(number) {
  return number * number;
}

function hello() {
  console.log("Hello JS");
}

hello();
let a = square(9);
console.log(a);
console.log(square(6));

///////////////////////////////////////////////////////////////////////////////////

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

///////////////////////// Function Expression //////////////////////////////////////

// Standard way of using is to use 'const' instead of let.
// If we used 'const' here, then we can not redefined it anywhere.

// standard way
const sum = function (a, b) {
  return a + b;
};

console.log(sum(9, 8));
console.log(sum(19, 18));

// 'sum' variable name cannot be redefined again
// sum = 90; <--- Throws error

///////////////////////////////////////////////////////////////////////////////////

// If we use 'let' here, then we can redefine that let variable anywhere.

// Not standard way
let multiply = function (a, b) {
  return a * b;
};

console.log(multiply(9, 8));

multiply = 90; // redefined here
console.log(multiply);

// console.log(multiply(9, 8)); <-- Thows error due to redefination

/////////////////////////////Arrow function////////////////////////////////////////

// Arrow function

const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(89, 9));

let temp1 = subtract(90, 8);
console.log(temp1);

const func1 = () => {
  console.log("Hello World");
};

func1();

// Hello JS
// 81
// 36
// Honda
// Toyota
// 17
// 37
// 72
// 90
// 80
// 82
// Hello World
