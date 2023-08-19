// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with let have Block Scope

const a = "sachin";

// const cannot be changed once assigned
// const a= 1983; <-- Throws an error

console.log(a);

// a=89; <-- Not allowed
// console.log(a);

{
    const a = 78;
    console.log(a);
}
// const should be assigned while declaring it
// const b; <--- Throws an error

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

//   mycar =90; <-- Not allowed
console.log(mycar);

// Allowed
mycar.make = 90;
mycar.model = 9990;
console.log(mycar);

// sachin
// 78
// { make: 'Honda', model: 'Accord', year: 1998 }
// { make: 90, model: 9990, year: 1998 }
