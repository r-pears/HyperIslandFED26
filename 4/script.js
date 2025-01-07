const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const delegatedButtons = buttonChildContainer.querySelectorAll(":scope > button")

//DO NOT TOUCH
buttonContainer.addEventListener("click", (event) => {
	if (!(event.target.tagName === "BUTTON")) {
		alert("Container clicked!");
	}
});

buttonChildContainer.addEventListener("click", (event) => {
	if (!(event.target.tagName == "BUTTON")) {
		alert("Child container clicked!");
	}
});
//DO NOT TOUCH

button2.onclick = function () {
	alert("Level 0");
};

button3.addEventListener("click", function () {
	alert("Level 2");
});

delegatedButtons.forEach((button) => {
	button.addEventListener("click", () => {
		alert("Event delegation");
	});
});
