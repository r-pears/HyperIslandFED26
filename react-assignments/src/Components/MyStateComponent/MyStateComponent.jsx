import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  const [name, updateName] = useState("");
  const [age, updateAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Age: ", age);
  }; 

  return (
    <div>
    <h2>State Component</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="usersName">What's your name?</label><br />
        <input type="text" name="usersName" value={name} onChange={(e) => updateName(e.target.value)}/><br />
        <label htmlFor="usersAge">How old are you?</label><br />
        <input type="number" min="1" max ="150" name="usersAge" value={age} onChange={(e) => updateAge(e.target.value)}/><br/>
        <button type="submit">Submit</button>
      </form> 
    </div>
  );
};

export default MyStateComponent;
