let marks = {
  harry: 90,
  shubham: 9,
  lovish: 56,
  Monika: 4,
};
// Problem No 1
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Problem No 2
for (let it in marks) {
  console.log("The marks of " + it + " are " + marks[it])
}

// Problem No 3
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};

console.log(mean(4, 5, 6, 7));

// The marks of harry are 90
// The marks of shubham are 9       
// The marks of lovish are 56       
// The marks of Monika are 4    

// The marks of harry are 90        
// The marks of shubham are 9       
// The marks of lovish are 56       
// The marks of Monika are 4      
  
// 5.5