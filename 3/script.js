const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", function(){
  const submitBtn = form.querySelector("input[type='submit']");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("form submitted!");
  });

  const nameInput = document.querySelector('label[for="name"]');
  const emailInput = document.querySelector('label[for="email"]');
  const phoneInput = document.querySelector('label[for="phone"]');
  const messageInput = document.querySelector('label[for="message"]');
  const optionsTitle = document.querySelector('label[for="options"]');
  const options = document.querySelector("#options");
  const inputs = document.querySelectorAll("input");
  const radioLabels = document.querySelectorAll('label[for^="radio"]');
  const textArea = document.querySelector("textarea");


  nameInput.textContent = "Your name : ";
  emailInput.textContent = "Your email : ";
  phoneInput.textContent = "Phone number : ";
  messageInput.textContent = "Messages : ";
  optionsTitle.textContent = "Select your option : ";

  form.style.backgroundColor = "#f0f0f0";
  form.style.textAlign = "center";
  form.style.fontSize = "2rem";
  submitBtn.style.backgroundColor = "blue";
  submitBtn.style.color = "white";
  submitBtn.style.fontSize = "1.5rem";

  textArea.style.color = "blue";
  textArea.style.backgroundColor = "beige";

  options.style.backgroundColor = "beige";
  options.style.fontSize = "1.5rem"

  inputs.forEach(input => {
    input.style.height = "3rem";
  });

  radioLabels.forEach((label, index) => {
    label.textContent = `Choice ${index + 1}`;
  });
});