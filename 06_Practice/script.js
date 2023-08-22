document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "red";

let it1 = (document.getElementsByTagName("nav")[0].children[1].style.color =
  "red");

Array.from(document.getElementsByTagName("li")).forEach((element) =>{
  element.style.background = "cyan";
})

let arr = document.getElementsByTagName("li");

// for(let i=0;i<arr.length;i++)
// {
//   arr[i].style.background="red";
// }

// for(let it of arr)
// {
//   it.style.color="blue";
// }
