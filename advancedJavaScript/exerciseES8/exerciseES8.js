// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart

turtle = turtle.trim().padEnd(9, '='); 
//The trim() method returns the string stripped of whitespace from both ends. trim() does not affect the value of the string itself.
'     ||<- Start line'
'🐢======='
'       🐇'


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'
Object.entries(obj).map(value => value.join(" ")).join(' ');

// The join() method returns the array as a string.

// The elements will be separated by a specified separator. The default separator is comma (,).

// Note: this method will not change the original array.