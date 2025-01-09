const style = document.createElement("style");
style.textContent = `
  form {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: linear-gradient(90deg, hsla(330, 36%, 53%, 1) 0%, hsla(289, 68%, 19%, 1) 100%);
    font-family: roboto, sans-serif;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #333;
  }

  input, textarea, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    box-sizing: border-box;
  }

  .radio-group {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 30px;
  }
  .radio-group label {
    display: flex;
    align-items: center;
  }

  input[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #f4d9ff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  input[type="submit"]:hover {
    background-color: #d6b3ff;
  }
`;
document.head.appendChild(style);