const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  alert("Child container clicked!");
  if (event.target.tagName === 'BUTTON') {
    alert(`${event.target.textContent} CLICKED`);
  }
});

const btn2 = document.getElementById("button2")
btn2.onclick = () => {
  alert('BTN2 clicked')
}

const btn3 = document.getElementById("button3")
btn3.addEventListener('click', (e) => {
  e.stopPropagation()
  alert('BTN3 clicked')
})



