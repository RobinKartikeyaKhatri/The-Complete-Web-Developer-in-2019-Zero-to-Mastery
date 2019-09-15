// Pass by Value
var a = 5;
var b = a;

console.log(a);
console.log(b);

b++;

console.log(b);


// Pass by Reference
var obj1 = {name: "lalit", password: "1234"};
var obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj2.password = "abcd";

console.log(obj1);
console.log(obj2);

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(435678);

console.log(c);
console.log(d);

// Cloning (that prevent reference)
let obj = {a: "a", b: "b", c: "c"};
let clone = Object.assign({}, obj);

obj.c = 5;
console.log(obj);
console.log(clone);

// Shallow Cloning and Deep Cloning
let obj = {
    a: "a",
    b: "b",
    c: {
        deep: "try and copy me"
    }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = "hahaha";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
