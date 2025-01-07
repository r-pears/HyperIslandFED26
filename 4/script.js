const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  if (event.target.id === "button4" || event.target.id === "button5") {
    event.stopPropagation();
    alert(`This is an event delegation (${event.target.textContent})`);
    return;
  }

  alert("Child container clicked!");
});

button2.onclick = (event) => {
  event.stopPropagation();
  alert("This is a DOM level 0 event handler.");
};

button3.addEventListener("click", (event) => {
  event.stopPropagation();
  alert("This is a DOM level 2 event handler.");
});

function myFunction(event) {
  event.stopPropagation();
  alert("This is an inline event handler.");
}
