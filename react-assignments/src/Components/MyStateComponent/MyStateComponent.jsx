import React, { useState } from "react";



const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit =(e) => {
    //prevent default
    e.preventDefault();
    const formData = {name, age};
    localStorage.setItem("formData", JSON.stringify(formData));
    alert(`Form submitted with name: ${name} and age: ${age}`);
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      <h1>Client Form</h1>
      <form onSubmit={handleSubmit} id="form">
        <label htmlFor="name">Name: </label>
        <input type="text" value={name} id="name" onChange={handleNameChange} />
        <label htmlFor="age">Age: </label>
        <input type="text" value={age} id="age" onChange={handleAgeChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
