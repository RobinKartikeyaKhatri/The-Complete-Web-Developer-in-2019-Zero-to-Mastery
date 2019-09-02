function checkDriverAge3(age) {
    if (age < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (age > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (age === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge3(12);