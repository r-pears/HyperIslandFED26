const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  event.stopPropagation();
  if(event.target.id === "button4") {
    alert(event.target.textContent);
    return;
  } else if (event.target.id === "button5") {
    alert(event.target.textContent);
    return;
  }
  alert("Child container clicked!");
});

const button2 = document.getElementById("button2")

button2.onclick = function(event) {
  event.stopPropagation();
  alert("button2");
}

const button3 = document.getElementById("button3");

button3.addEventListener("click", (event) => {
event.stopPropagation();
  alert("button3");
});




