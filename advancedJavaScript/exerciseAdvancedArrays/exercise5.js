// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const username = [];
array.forEach((name) => {
  username.push("!" + name.username);
});

console.log(username);

//Create an array using map that has all the usernames with a "? to each of the usernames
const array2 = array.map((ele) => {
  return ele.username + "?";
});
console.log(array2);

//Filter the array to only include users who are on team: red
const array3 = array.filter((element) => {
  return element.team === "red";
});

console.log(array3);

//Find out the total score of all users using reduce
const array4 = array.reduce((acc, ele) => {
  return acc+= ele.score;
}, 0);

console.log(array4);


// (1), what is the value of i?     0, 1, 2, 3, 4, 5
// (2), Make this map function pure: const newArray = arrayNum.map(num => {return num * 2}); console.log(newArray);
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
});




//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const userInfo = array.map((ele) => {
  ele.items = ele.items.map((item) => {
    return item + "!";
  });
  return ele;
});

console.log(userInfo);