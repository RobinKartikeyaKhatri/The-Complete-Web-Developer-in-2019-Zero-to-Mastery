// .padStart()
// .padEnd()

console.log("Turtle".padStart(10));
console.log("Turtle".padEnd(10));

const fun = (a, b, c, d,) => {
    console.log(a);
}

fun(1, 2, 3, 4,);




// Object.values
// Object.entries
// Object.keys

let object = {
    username0: "Santa",
    username1: "Rudolf",
    username2: "Mr.Grinch"
}

Object.keys(object).forEach((key, index) => {
    console.log(key, object[key]);
});

Object.values(object).forEach(value => {
    console.log(value);
});

Object.entries(object).forEach(value => {
    console.log(value);
});

Object.entries(object).map(value => {
    return value[1] + value[0].replace("username", "");
});