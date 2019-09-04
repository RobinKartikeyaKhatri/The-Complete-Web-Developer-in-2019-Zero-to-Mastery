var database = [
    {
        username: "andrei",
        password: "supersecret"
    },
    {
        username: "suresh",
        password: "suresh"
    },
    {
        username: "robin",
        password: "robin"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "So tired from all that learning!"
    },
    {
        username: "Sally",
        timeline: "JavaScript sooooo cool!"
    },
    {
        username: "Mitch",
        timeline: "JavaScript is preeetyy cool!"
    }
];

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    } 
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password");
    }
}

var usernamePrompt = prompt("Waht is your username?");
var passwordPrompt = prompt("What is your password?");

signIn(usernamePrompt, passwordPrompt);