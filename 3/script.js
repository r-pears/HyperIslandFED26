
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap";
document.head.appendChild(link);

document.body.style.backgroundColor = "#222";
document.body.style.fontFamily = "'Montserrat', sans-serif"; 
document.body.style.margin = "0";
document.body.style.padding = "0";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

const form = document.querySelector("form");
if (form) {
  form.style.backgroundColor = "#444";
  form.style.padding = "20px";
  form.style.borderRadius = "10px";
  form.style.width = "100%";
  form.style.maxWidth = "500px";
  form.style.textAlign = "center";
}

const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input, textarea, select");

labels.forEach(label => {
  label.style.display = "block";
  label.style.color = "#fff";  
  label.style.marginBottom = "10px";
});

inputs.forEach(input => {
  input.style.width = "calc(100% - 20px)";
  input.style.padding = "10px";
  input.style.marginBottom = "15px";
  input.style.border = "none"; 
  input.style.borderRadius = "5px";
  input.style.backgroundColor = "#555"; 
  input.style.color = "#fff";  
  input.style.marginRight = "10px"; 
});


const submitButton = document.querySelector("input[type='submit']");
if (submitButton) {
  submitButton.style.backgroundColor = "#6c757d"; 
  submitButton.style.color = "#fff";  
  submitButton.style.padding = "10px 20px";
  submitButton.style.border = "none";
  submitButton.style.borderRadius = "4px";
  submitButton.style.cursor = "pointer";
}

submitButton.addEventListener("mouseover", function() {
    submitButton.style.backgroundColor = "#5a6268";  
  });

  submitButton.addEventListener("mouseout", function() {
    submitButton.style.backgroundColor = "#6c757d";
  });
