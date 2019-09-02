var database = [
    {
        username: "andrei",
        password: "supersecret"
    }
];

var newsFedd = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "JavaScript is sooooo cooool!"
    }
];

var usernamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
    if (user === database[0].username && pass === database[0].password) {
        console.log(newsFedd);
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(usernamePrompt, passwordPrompt);