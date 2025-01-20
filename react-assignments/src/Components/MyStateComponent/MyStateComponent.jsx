import React, { useState } from "react";


// const [state, setState] = useState(initialState);


const MyStateComponent = () => {
  
  const[inputValue, setInputValue] = useState("");
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
  );
};

export default MyStateComponent;

// TODO: create a form using useState hook, the form should 
// have two input fields, 
// one for name and one for age, and a submit button 
// and handle form data. Submit/console.log the form data.
