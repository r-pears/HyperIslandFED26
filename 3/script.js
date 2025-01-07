document.addEventListener('DOMContentLoaded', function() {
    // Add Google Font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Color Palette
    const colors = {
        primary: '#3498db',
        secondary: '#2ecc71',
        background: '#f1f2f6',
        text: '#2c3e50',
        border: '#bdc3c7'
    };

    // Global Styling
    document.body.style.cssText = `
        font-family: 'Roboto', sans-serif;
        background-color: ${colors.background};
        margin: 0;
        padding: 20px;
        line-height: 1.6;
        color: ${colors.text};
    `;

    // Form Container
    const container = document.createElement('div');
    container.style.cssText = `
        max-width: 500px;
        margin: 0 auto;
        background-color: white;
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        transition: all 0.3s ease;
    `;

    const form = document.querySelector('form');
    container.appendChild(form);
    document.body.appendChild(container);

    // Input Styling
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.style.cssText = `
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 2px solid ${colors.border};
            border-radius: 8px;
            transition: all 0.3s ease;
            outline: none;
            font-family: 'Roboto', sans-serif;
        `;

        input.addEventListener('focus', function() {
            this.style.borderColor = colors.primary;
            this.style.boxShadow = `0 0 8px rgba(52, 152, 219, 0.3)`;
        });

        input.addEventListener('blur', function() {
            this.style.borderColor = colors.border;
            this.style.boxShadow = 'none';
        });
    });

    // Label Styling
    const labels = form.querySelectorAll('label');
    labels.forEach(label => {
        label.style.cssText = `
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: ${colors.text};
            transition: color 0.3s ease;
        `;
    });

    // Submit Button
    const submitButton = form.querySelector('input[type="submit"]');
    submitButton.style.cssText = `
        background-color: ${colors.primary};
        color: white;
        padding: 12px 20px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 16px;
        transition: all 0.3s ease;
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
    `;

    // Button Hover Effects
    submitButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
        this.style.backgroundColor = colors.secondary;
        this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });

    submitButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.backgroundColor = colors.primary;
        this.style.boxShadow = 'none';
    });

    // Radio Button Styling
    const radioButtons = form.querySelectorAll('input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.style.cssText = `
            margin-right: 10px;
            cursor: pointer;
        `;
    });

    // Form Validation
    form.addEventListener('submit', function(event) {
        let isValid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.style.borderColor = 'red';
                isValid = false;
            } else {
                input.style.borderColor = colors.border;
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill in all fields');
        }
    });

    // Hover Effect for Radio Labels
    const radioLabels = form.querySelectorAll('input[type="radio"] + label');
    radioLabels.forEach(label => {
        label.style.transition = 'color 0.3s ease';
        label.addEventListener('mouseenter', function() {
            this.style.color = colors.primary;
        });
        label.addEventListener('mouseleave', function() {
            this.style.color = colors.text;
        });
    });
});
