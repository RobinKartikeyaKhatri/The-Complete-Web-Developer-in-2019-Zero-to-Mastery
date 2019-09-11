const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second;
}

const newFunc = first();
newFunc();

// Clousers - a function ran. the function executed. It's never going to executed again.
// BUT it's going remember that there are references to those variables
// so the child scope always has access to the parent scope


// Currying
const multiply = (a, b) => a * b;
const currriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = currriedMultiply(5);


// Compose
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(sum, sum)(5);