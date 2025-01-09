const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

button2.onclick = function() {
  alert("Button 2 clicked!");
};

button3.addEventListener("click", function(event) {
  alert("Button 3 clicked!");
});

buttonChildContainer.addEventListener("click", function(event) {
  if (event.target.id === "button4") {
    alert("Button 4 clicked!");
  } else if (event.target.id === "button5") {
    alert("Button 5 clicked!");
  }
});