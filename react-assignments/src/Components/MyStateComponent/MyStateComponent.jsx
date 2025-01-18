import React, { useState } from "react";

const MyStateComponent = () => {
  /* TODO create a form using useState hook, the form should have two input fields, 
  one for name and one for age, and a submit button and handle form data. 
  Submit/console.log the form data.*/
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('Form:', { name, age });
  };

  return (
    <div>
      <h1>My State Component</h1>
      <form onSubmit={handleSubmit}>
        <label for="name">Name: </label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}  />

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MyStateComponent;
