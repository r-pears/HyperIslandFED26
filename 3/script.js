document.addEventListener("DOMContentLoaded", () => {
    const formContainer = document.getElementById("form-container");
    const formTitle = document.getElementById("form-title");
    const form = document.getElementById("infoForm");
    const labels = form.querySelectorAll("label");
    const inputs = form.querySelectorAll("input, textarea, select");
    const submitButton = form.querySelector("input[type='submit']");
  
    // Apply Styles Dynamically
    formContainer.style.cssText = `
      max-width: 600px;
      margin: 50px auto;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      font-family: 'Arial', sans-serif;
      background: linear-gradient(135deg, rgba(252, 37, 123, 0.9), rgba(106, 17, 203, 0.9));
      color: white;
    `;
  
    formTitle.style.cssText = `
      text-align: center;
      margin-bottom: 20px;
      font-size: 28px;
      font-weight: bold;
      color: #fff;
    `;
  
    labels.forEach((label) => {
      label.style.cssText = `
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
        color: #ffffffcc;
      `;
    });
  
    inputs.forEach((input) => {
      input.style.cssText = `
        width: 100%;
        padding: 12px;
        margin-bottom: 20px;
        border: 2px solid rgba(255, 255, 255, 0.4);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        font-size: 16px;
        box-sizing: border-box;
        outline: none;
        transition: all 0.3s ease-in-out;
      `;
  
      input.addEventListener("focus", () => {
        input.style.borderColor = "#6a11cb";
        input.style.boxShadow = "0 0 10px rgba(106, 17, 203, 0.5)";
      });
  
      input.addEventListener("blur", () => {
        input.style.borderColor = "rgba(255, 255, 255, 0.4)";
        input.style.boxShadow = "none";
      });
    });
  
    submitButton.style.cssText = `
      width: 100%;
      padding: 12px;
      font-size: 18px;
      font-weight: bold;
      color: white;
      background-color: #AB47BC;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    `;
  
    submitButton.addEventListener("mouseenter", () => {
      submitButton.style.backgroundColor = "#2575fc";
    });
  
    submitButton.addEventListener("mouseleave", () => {
      submitButton.style.backgroundColor = "#6a11cb";
    });
  
    // Form Submission Logic
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const message = document.getElementById("message").value;
      const options = document.getElementById("options").value;
      const radioGroup = document.querySelector("input[name='radioGroup']:checked");
  
      // Create Animated Popup
      const popup = document.createElement("div");
      popup.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        max-width: 400px;
        width: 90%;
      `;
      popup.innerHTML = `
        <h2 style="color: #2575fc; margin-top: 0;">Thank You!</h2>
        <p>Your submission has been received.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Option:</strong> ${options}</p>
        <p><strong>Pick:</strong> ${
          radioGroup ? radioGroup.nextElementSibling.textContent : "None"
        }</p>
        <button id="closePopup" style="
          margin-top: 20px;
          padding: 10px 20px;
          font-size: 16px;
          color: white;
          background-color: #2575fc;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        ">Close</button>
      `;
  
      
      document.body.appendChild(popup);
  
      document.getElementById("closePopup").addEventListener("click", () => {
        popup.remove();
      });
  
      form.reset();
    });
  });
  