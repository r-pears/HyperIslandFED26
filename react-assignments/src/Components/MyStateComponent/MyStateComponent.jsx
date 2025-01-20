import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  const [formData, setFormData] = useState({});
  const handleFormDataChange = (event) => 
    setFormData({...formData, [event.target.name]: event.target.value});

  const handleFormData = (event) => {
    event.preventDefault();
    console.log(formData);
    
  };
  return (
    <div>
      <h1>My State Component</h1>
    
    <form>
        <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleFormDataChange}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        onChange={handleFormDataChange}
      />
      <input type="submit" value="Submit" onClick={handleFormData} />
    </form>
    </div>
  );
};

export default MyStateComponent;