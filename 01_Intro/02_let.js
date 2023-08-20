// Variables defined with let cannot be Redeclared
// Variables defined with let must be Declared before use
// Variables defined with let have Block Scope

let a = 67;
// let a = 89; <--Not allowed
console.log(a);
a = "harry";
console.log(a);

{
  a = "sachin";
  console.log(a);
}
console.log(a);

// Attention here !
{
  let a = 1983;
  console.log(a);
}
console.log(a);

// 67
// harry
// sachin
// sachin
// 1983
// sachin
