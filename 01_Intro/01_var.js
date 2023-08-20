// var have global level scope
// var can be changed from anywhere

var a = 67;    // global
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
  var a = 1983;
  console.log(a);
}
console.log(a);

// 67
// harry 
// sachin
// sachin
// 1983  
// 1983