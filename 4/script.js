const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
});

//Button 1
function button1 () {
  alert("Button 1 clicked!")
  event.stopPropagation()
}

//Button 2
const button2 = document.getElementById("button2")
button2.addEventListener("click", (event) => {
  alert("Button 2 clicked!")
  event.stopPropagation()
})

//Button 3
const button3 = document.getElementById("button3")
button3.addEventListener('click', function(event){
  alert("Button 3 Clicked!")
  event.stopPropagation()
})

//Button 4/5
buttonChildContainer.addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    alert(event.target.innerText + " clicked!");
    event.stopPropagation();
  }
})