import React, { useState } from "react";

const MyStateComponent = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("Form Submitted: ", { name, age });
  };

  return (
    <div>
      <h1>My State Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;

