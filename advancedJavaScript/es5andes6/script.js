// let + const
// const player = "bobby";
// let experience = 100;
// let wizardLevel = false;

// if (experience > 90) {
//     let wizardLevel = true;
//     console.log('inside', wizardLevel);
// }

// console.log('outside', wizardLevel);



// Destructuring
const obj = {
    player: "bobby",
    experience: 100,
    wizardLevel: false
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const {player, experience} = obj;
let {wizardLevel} = obj;




// Object Properties
const name = "john snow";

const newObj = {
    [name]: "hello",
    [1 + 2]: "hihi"
}



// Template String
// const name = "Sally";
// const age = 34;
// const pet = "horse";

// const greeting = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;


// Default arguments
function greet(name="", age=30, pet="cat") {
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have`;
}



// Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');


// Arrow functions
function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;