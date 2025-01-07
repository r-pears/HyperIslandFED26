const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

// Parent container event listener
buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

// Child container event listener
buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
  event.stopPropagation(); 
});

// Inline Event Handlers for Button 1
document.getElementById("button1").onclick = function () {
  alert("Button 1 clicked (Inline Event Handler)!");
};

// DOM Level 0 Event Handlers for Button 2
const button2 = document.getElementById("button2");
button2.onclick = function () {
  alert("Button 2 clicked (DOM Level 0 Event Handler)!");
};

// DOM Level 2 Event Listeners for Button 3
const button3 = document.getElementById("button3");
button3.addEventListener("click", () => {
  alert("Button 3 clicked (DOM Level 2 Event Listener)!");
});

// Event Delegation for Button 4 and Button 5
buttonChildContainer.addEventListener("click", (event) => {
  if (event.target.id === "button4") {
    alert("Button 4 clicked (Event Delegation)!");
  } else if (event.target.id === "button5") {
    alert("Button 5 clicked (Event Delegation)!");
  }
  event.stopPropagation(); 
});
