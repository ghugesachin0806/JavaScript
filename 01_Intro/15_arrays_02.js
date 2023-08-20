// Array Methods
let num = [1, 2, 3, 34, 4];
let b = num.toString(); // b is now a string
console.log(b, typeof b);

let c = num.join(" -- ");
console.log(c, typeof c);

let r1 = num.pop(); // pop returns the popped element
console.log(num, r1);

let r2 = num.push(56); // push returns the new array length
console.log(num, r2);

let r3 = num.shift(); // Removes an element from the start of the array
console.log(num, r3);

let r4 = num.unshift(78); // push to start returns the new array length
console.log(num, r4);

// 1,2,3,34,4 string
// 1 -- 2 -- 3 -- 34 -- 4 string
// [ 1, 2, 3, 34 ] 4
// [ 1, 2, 3, 34, 56 ] 5
// [ 2, 3, 34, 56 ] 1
// [ 78, 2, 3, 34, 56 ] 5
