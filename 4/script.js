const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

// Inline Event Handler (Button 1)
// Add this to the HTML: <button id="button1" onclick="alert('Button 1 clicked!')">Button 1</button>

// DOM Level 0 Event Handler (Button 2)
const button2 = document.getElementById("button2");
button2.onclick = function(event) {
  event.stopPropagation();
  alert("Button 2 clicked!");
};

// DOM Level 2 Event Listener (Button 3)
const button3 = document.getElementById("button3");
button3.addEventListener("click", function(event) {
  event.stopPropagation();
  alert("Button 3 clicked!");
});

// Event Delegation (Button 4 and 5)
buttonChildContainer.addEventListener("click", function(event) {
  event.stopPropagation();
  if (event.target.id === "button4") {
    alert("Button 4 clicked!");
  } else if (event.target.id === "button5") {
    alert("Button 5 clicked!");
  }
});

// Parent container event listener (unchanged)
buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

// Child container event listener (unchanged)
buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});