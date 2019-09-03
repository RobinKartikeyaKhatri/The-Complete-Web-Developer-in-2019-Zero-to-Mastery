var todos = ["clean room", "brush teeth", "exercise", "study javascript", "eat healthy"];
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++) {
    console.log(todos);
    console.log(todos.pop());
    console.log(todos);
}

var counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
}

var counter1 = 10;
do {
    console.log(counter1);
    counter1--
} while (counter1 > 0);

todos.forEach(function (todo, i) {
    console.log(todo, i);
});