const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});
function clickBtn1(event) {
  alert("Button 1 clicked!");
  event.stopPropagation(); // Prevents the event from bubbling up to the parent container
}

button2.onclick = function (event) {
  alert("Button 2 clicked!");
  event.stopPropagation();
};
button3.addEventListener("click", (event) => {
  alert("Button 3 clicked!");
  event.stopPropagation();
});

buttonChildContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    alert(`${event.target.textContent} clicked`);
    event.stopPropagation();
  }
});
