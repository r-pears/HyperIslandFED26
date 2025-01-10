// Select all label elements and update their text
const labels = document.querySelectorAll('label');
labels.forEach((label, index) => {
    label.textContent =`Field ${index + 1}:`;
});

// Style the form container
const form = document.querySelector('form');
form.style.width = '50%';
form.style.margin = '0 auto';
form.style.padding = '20px';
form.style.border = '2px solid #ccc';
form.style.borderRadius = '10px';
form.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1';
form.style.fontFamily = 'Arial, sans-serif';

// Style input elements
const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea, select');
inputs.forEach((input) => {
    input.style.width = '100%';
    input.style.padding = '10px 0';
    input.style.marginBottom = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '5px';
    input.style.boxSizing = 'border-box';
});

// Style radio buttons and their labels
const radioLabels = document.querySelectorAll('input[type="radio"] + label');
radioLabels.forEach((label) => {
    label.style.marginRight = '10px';
    label.style.display = 'inline-block';
});

// style the submit button
const submitButton = document.querySelector('input[type="submit"]');
submitButton.style.backgroundColor = '#596D48';
submitButton.style.color = 'white';
submitButton.style.padding = '10px 20px';
submitButton.style.border = 'none';
submitButton.style.borderRadius = '5px';
submitButton.style.cursor = 'pointer';
submitButton.style.fontSize = '16px';

submitButton.addEventListener('mouseover', () =>{
    submitButton.style.backgroundColor = '#6E8256';
});

submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '#596D48'
});

// Add spacing between groups
const formElements = form.children;
for (let i = 0; i < formElements.length; i++) {
    if (formElements[i].tagName !== 'BR' && formElements[i].tagName !== 'INPUT' && formElements[i].tagName !== 'TEXTAREA') {
        formElements[i].style.marginBottom = '15px';
    }
}
