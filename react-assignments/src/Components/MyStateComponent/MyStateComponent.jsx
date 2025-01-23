import React, { useState } from "react";

const MyStateComponent = () => {
  // TODO create a form using useState hook, the form should have two input fields, one for name and one for age, and a submit button and handle form data. Submit/console.log the form data.
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
    const formData = {name, email}
    console.log(formData)
    setName('')
    setEmail('')
  }
  return (
    <div>
      <h1>Form Submtion Using useState</h1>
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
          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
           />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyStateComponent;
