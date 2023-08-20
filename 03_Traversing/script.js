a = document.body.firstChild;
b = document.body.firstElementChild;

console.log(a);
console.log(b);
console.log(a.parentNode);
console.log(a.parentElement);

console.log(b.firstChild);

console.log(b.firstElementChild);
console.log(b.lastElementChild);

console.log(b.nextSibling);
console.log(b.nextElementSibling);

console.log(b.firstElementChild);
console.log(b.firstElementChild.nextElementSibling);

// #text
// div
// body
// body
// #text
// div.first
// div.second
// #text
// script
// div.first
// div.second