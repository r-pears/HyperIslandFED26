// Select the form element
const form = document.querySelector('form');

// Set form styles
form.style.backgroundColor = '#f2f2f2';
form.style.padding = '20px';
form.style.borderRadius = '5px';
form.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';

// Select all input elements within the form
const inputs = form.querySelectorAll('input');

// Set styles for each input element
inputs.forEach(input => {
    input.style.width = '100%';
    input.style.padding = '10px';
    input.style.margin = '10px 0';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '4px';
});

// Select the submit button
const submitButton = form.querySelector('input[type="submit"]');

// Set styles for the submit button
submitButton.style.backgroundColor = '#4CAF50';
submitButton.style.color = 'white';
submitButton.style.border = 'none';
submitButton.style.padding = '15px 20px';
submitButton.style.textAlign = 'center';
submitButton.style.textDecoration = 'none';
submitButton.style.display = 'inline-block';
submitButton.style.fontSize = '16px';
submitButton.style.margin = '4px 2px';
submitButton.style.cursor = 'pointer';
submitButton.style.borderRadius = '4px';