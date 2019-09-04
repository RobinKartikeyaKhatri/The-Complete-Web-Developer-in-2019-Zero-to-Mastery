console.log(document.getElementsByTagName("p"));

console.log(document.getElementsByClassName("second"));

console.log(document.getElementById("first"));

console.log(document.querySelector("p"));

console.log(document.querySelectorAll("li"));

var firstLi = document.querySelector("li");
console.log(firstLi.getAttribute("random"));
console.log(firstLi.getAttribute("placeholder"));

var secondLi = document.querySelectorAll("li")[1];
console.log(secondLi);
secondLi.setAttribute("value", "half kg");

// var h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "yellow";
// h1.style.fontSize = "200px";

var allLis = document.querySelectorAll("li");
allLis.forEach(function (li) {
    li.style.color = "purple";
});

var h1 = document.querySelector("h1");
h1.className = "coolTitle";

var myFirstLi = document.querySelector("li");
console.log(myFirstLi.classList);

var myAllListItems = document.querySelectorAll("li");
myAllListItems.forEach(function (li) {
    li.classList.toggle("done");
});

var firstP = document.querySelector("p");
console.log(firstP.parentElement);