const form = document.querySelector('form');

form.style.backgroundColor = '#f2f2f2';
form.style.padding = '20px';
form.style.borderRadius = '5px';
form.style.boxShadow = '0 0 10px rgba(235, 4, 4, 1)';

const inputs = form.querySelectorAll('input');

inputs.forEach(input => {
    input.style.marginBottom = '10px';
    input.style.padding = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '3px';
    input.style.width = '100%';
    input.style.boxSizing = 'border-box';
});



const submitButton = form.querySelector('input[type="submit"]');

submitButton.style.backgroundColor = 'black';
submitButton.style.color = 'white';
submitButton.style.border = 'none';
submitButton.style.padding = '5px 10px';
submitButton.style.borderRadius = '5px';
submitButton.style.cursor = 'pointer';

submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = '#45a049';
});

submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '#4CAF50';
});