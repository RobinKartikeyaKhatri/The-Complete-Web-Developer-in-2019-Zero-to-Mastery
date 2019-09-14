// Advanced Arrays

// const array = [1, 2, 10, 16];

// let mul = 0;

// array.forEach((element) => {
//     mul+= element * 2;
//     console.log(mul);
// });

const array = [1, 2, 10, 16];
const double = [];

const newArray = array.forEach((num) => {
    double.push(num * 2);
});

console.log(double);



// map, filter, reduce

// map
const mapArray = array.map((num) => {
    return num * 2;
});

console.log(mapArray);


// filter
const filterArray = array.filter((num) => {
    return num > 5;
});

console.log(filterArray);


// reduce
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 2);

console.log(reduceArray);
























