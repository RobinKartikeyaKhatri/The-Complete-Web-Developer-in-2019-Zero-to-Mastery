var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// Function to DELETE existing LI ELEMENTS
function selectExistingDeleteButtons() {
	var deleteButtons = document.querySelectorAll(".myButton");
	deleteButtons.forEach(function (oneButton) {
		oneButton.addEventListener("click", function () {
			this.parentElement.remove();
		});
	});
}


// DELETES LISTS ITEMS THAT ARE MADE USING RUNTIME
function makeButtons() {
	var myButton = document.querySelectorAll(".myButton");
	myButton.forEach(function (singleBtn) {
	singleBtn.addEventListener("click", function () {
			singleBtn.parentElement.remove();
		});
	});
}


// make strike-through
function toggleListItems() {
	var lis = document.querySelectorAll("li");
	lis.forEach(function (li) {
		li.addEventListener("click", function () {
			this.classList.toggle("done");
		});
	});
}

toggleListItems();

selectExistingDeleteButtons();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// toggleListItems();






function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.className = "myButton";
	toggleListItems();
	li.appendChild(btn);
	makeButtons();
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

