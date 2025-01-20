import React, { useState } from "react";
import "./MyStateComponent.css"


// const [state, setState] = useState(initialState);


const MyStateComponent = () => {
  
  const[inputName, setInputName] = useState("");
  const[inputAge, setInputAge] = useState("");

  const handleName = (e) => {
    setInputName(e.target.value)
  }

  const handleAge = (e) => {
    setInputAge(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Your name:", inputName, "Your age:", inputAge, "years old.")
  }

  return (

    <form>
      <input 
      type="text"
      onChange={handleName}
      name="name"
      placeholder="Write your name.." 
      />
      <input 
      type="text"
      onChange={handleAge}
      name="age"
      placeholder="Write your age.." 
      />
      <button onClick={handleClick}>Submit</button>
    </form>

  )


 
};

export default MyStateComponent;

// TODO: create a form using useState hook, the form should 
// have two input fields, 
// one for name and one for age, and a submit button 
// and handle form data. Submit/console.log the form data.

/* const[inputValue, setInputValue] = useState("");
const[isVisible, setIsVisible] = useState(false)


const handleChange = (e) => {
  setInputValue(e.target.value)
}

const handleClick = () => {
  setIsVisible(true)
}

return (
  <div>
    <h1>My State Component</h1>
    <input type="text" value={inputValue} onChange={handleChange} />
    {isVisible && <p>{inputValue}</p>}
    <button onClick={handleClick}>Submit</button>

  </div>
); */
