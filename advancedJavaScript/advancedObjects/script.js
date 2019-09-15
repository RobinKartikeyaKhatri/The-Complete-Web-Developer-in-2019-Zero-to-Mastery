// reference type
var object1 = {value: 10}
var object2 = object2;
var object3 = {value: 10}

console.log(object1);
console.log(object2);
console.log(object3);


// context vs scope
const object4 = {
    a: function() {
        console.log(this);
    }
}

console.log(object4.a);

// instantiation
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`WEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");