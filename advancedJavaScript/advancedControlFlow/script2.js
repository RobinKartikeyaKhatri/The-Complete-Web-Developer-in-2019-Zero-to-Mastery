// Switch Operator
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
        break;

        case "back":
            whatHappens = "you arrived home";
        break;

        case "right":
            whatHappens = "you found a river";
        break;

        case "left":
            whatHappens = "you run into troll";
        break;
    
        default: 
            whatHappens = "please enter a valid direction";
            break;
    }
    return whatHappens;
}

var result = moveCommand("back");
console.log(result);
