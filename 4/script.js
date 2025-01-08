const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

//DOM Level 2
const button3 = document.getElementById("button3");
button3.addEventListener("click", (event) => {
  alert("button3 clicked!");
});
