const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", function(){
  const submitBtn = form.querySelector("input[type='submit']");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    alert("form submitted!");
  });

  document.querySelector('label[for="name"]').textContent = "Your name : ";
  document.querySelector('label[for="email"]').textContent = "Your email : ";
  document.querySelector('label[for="phone"]').textContent = "Phone number : ";
  document.querySelector('label[for="message"]').textContent = "Messages : ";
  document.querySelector('label[for="options"]').textContent = "Select your option : ";

  form.style.backgroundColor = "#f0f0f0";
  form.style.textAlign = "center";
  form.style.fontSize = "2rem";
  submitBtn.style.backgroundColor = "blue";
  submitBtn.style.color ="white";
  submitBtn.style.fontSize ="1.5rem";
});