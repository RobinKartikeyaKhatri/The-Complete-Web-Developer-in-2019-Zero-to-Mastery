// Ternary Operator

function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Aceess id denied";

console.log(answer);

var automatedAnswer = "Your account # is " + (isUserValid(false) ? "1234" : "not available");

console.log(automatedAnswer);