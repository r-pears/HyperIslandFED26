const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

// Level 0

const button2 = document.getElementById("button2");
button2.onclick = function () {
  alert("Button 2 clicked!");
};

// Level 2
const button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
  alert("Button 3 clicked!");
});

//Event Delegation

buttonChildContainer.addEventListener("click", (event) => {
  // Check if the clicked element is a button
  if (event.target.tagName === "BUTTON") {
    alert(`${event.target.id} clicked!`);
  }

  event.stopPropagation();
});
