// Inline Event Handler for Button 1
function handleButtonClick1(event) {
  alert('Button 1 clicked');
  event.stopPropagation();
}

// DOM Level 0 Event Handler for Button 2
document.getElementById('button2').onclick = function(event) {
  alert('Button 2 clicked');
  event.stopPropagation();
};

// DOM Level 2 Event Listener for Button 3
document.getElementById('button3').addEventListener('click', function(event) {
  alert('Button 3 clicked');
  event.stopPropagation();
});

// Event Delegation for Button 4 and Button 5
document.getElementById('buttonContainer').addEventListener('click', function(event) {
  if (event.target.classList.contains('button4')) {
    alert('Button 4 clicked');
  } else if (event.target.classList.contains('button5')) {
    alert('Button 5 clicked');
  }
  event.stopPropagation();
});