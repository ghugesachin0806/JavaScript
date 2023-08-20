let arr = [45, 23, 21];

// Array map method
// It will create new array
let a = arr.map((value) => {
  // console.log(value);
  return value;
});

console.log(arr, a);

let a1 = arr.map((value, index) => {
  // console.log(value+" "+index);
  return index;
});

console.log(arr, a1);

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5];
let a2 = arr2.filter((a) => {
  return a < 10;
});

console.log(arr2, a2);

// [ 45, 23, 21 ] [ 45, 23, 21 ]
// [ 45, 23, 21 ] [ 0, 1, 2 ]
// [ 45, 23, 21, 0, 3, 5 ] [ 0, 3, 5 ]
