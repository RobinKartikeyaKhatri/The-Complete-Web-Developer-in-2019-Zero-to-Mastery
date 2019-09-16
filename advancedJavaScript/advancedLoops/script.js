const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 10000
}

// 1. for loop
// for (var i = 0; i < basket.length; i++) {
//     console.log(basket[i]);
// }

// 2. forEach loop
// basket.forEach((item) => {
//     console.log(item);
// });

// 3. for of loop
  // Iterating over basket array (Iterating can be done on arrays, strings)
for (item of basket) {
    console.log(item);
}

for (item of 'basket') {
    console.log(item);
}



// 4. for in loop (Works with objects -> can look up object properties)
// when we traverse (Iterating) object that time we call it Enumerating
for (item in detailedBasket) {
    console.log(item);
}