// Arrays are objects in java
let marks_class_12 = [91, 82, 63, 84, false, "JS"];

console.log(marks_class_12);

console.log(marks_class_12[0]);
console.log(marks_class_12[1]);
console.log(marks_class_12[2]);
console.log(marks_class_12[3]);
console.log(marks_class_12[4]);
console.log(marks_class_12[5]);
console.log(marks_class_12[6]); // Will be undefined because index 6 does not exist

console.log("The length of marks_class_12 is", marks_class_12.length);

// for loop
for (let i = 0; i < marks_class_12.length; i++) {
  console.log(marks_class_12[i]);
}

marks_class_12[6] = 89; // Adding a new value to the array
marks_class_12[0] = "sachin"; // Changing the value of an array
console.log(marks_class_12);

console.log(typeof marks_class_12);

// for each loop
marks_class_12.forEach((element) => {
  console.log(element);
});

// [ 91, 82, 63, 84, false, 'JS' ]
// 91
// 82
// 63
// 84
// false
// JS
// undefined
// The length of marks_class_12 is 6
// 91
// 82
// 63
// 84
// false
// JS

// [ 'sachin', 82, 63, 84, false, 'JS', 89 ]

// object

// sachin
// 82
// 63
// 84
// false
// JS
// 89