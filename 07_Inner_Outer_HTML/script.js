let x = document.getElementsByTagName('span')[0]
console.log(x)

let y = document.getElementsByTagName('span')[0]
console.dir(y)

console.log(document.body.firstChild.nodeName) 
console.log(document.body.firstElementChild.nodeName)

console.log(first.innerHTML) ;
first.innerHTML = "<i>hey I am italic</i>" 
console.log(first.innerHTML) ;
console.log(first.outerHTML);
first.outerHTML = "<div>hey</div>"
console.log(first.outerHTML);