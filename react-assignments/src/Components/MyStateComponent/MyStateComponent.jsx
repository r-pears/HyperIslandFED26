import React, { useState } from "react";

const MyStateComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const ageChange = (event) => {
    setAge(event.target.value);
  };

  const formSubmition = () => {
    console.log(`Name: ${name}, Age: ${age}`);
  };
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  return (
    <div>
      <h1>My State Component</h1>
      <form>
        <p>Name: {name} </p>
        <input type="text" value={name} onChange={nameChange} />
        <p>Age: {age}</p>
        <input type="number" value={age} onChange={ageChange} />
        <br />
        <br />
        <button type="button" onClick={formSubmition}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyStateComponent;
