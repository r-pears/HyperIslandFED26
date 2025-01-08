const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

// Parent event listener for button container
buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

//DOM Level 0
const button2 = document.getElementById("button2");
button2.onclick = function () {alert("Button2 is clicked!");};

//DOM Level 2
const button3 = document.getElementById("button3");
button3.addEventListener("click", function (event) {alert("Button3 is clicked!");});

//Event Delegation for Button 4 and 5
buttonChildContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    alert(`${event.target.textContent} is clicked!`);
    event.stopPropagation();
  }
});