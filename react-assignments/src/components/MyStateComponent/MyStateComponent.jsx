import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age,
  // and a submit button and handle form data. Submit/console.log the form data.
  const [formData, setFormData] = useState({ name: "", age: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError("Name cannot be empty.");
      return;
    }
    if (formData.age < 0 || formData.age > 130 || formData.age === "") {
      setError("Age must be a number between 0 and 130.");
      return;
    }

    setError(""); // Clear errors if validation passes
    alert(
      `Form submitted with input.\nName:${formData.name}\nAge: ${formData.age}`
    );
    console.log(
      `Form submitted with input.\nName:${formData.name}\nAge: ${formData.age}`
    );
  };

  return (
    <div>
      <h1>My State Component</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter your age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default MyStateComponent;
