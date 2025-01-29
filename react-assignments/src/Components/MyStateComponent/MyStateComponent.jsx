import React, { useState } from "react";
import PropsComponent from "./PropsComponent"; 

const MyStateComponent = () => {
  const [name, setName] = useState(""); 
  const [age, setAge] = useState(""); 
  const [submittedData, setSubmittedData] = useState(null); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const formData = { name, info: { age } }; 
    console.log(formData); 
    setSubmittedData(formData); e
    setName(""); 
    setAge(""); 
  };

  return (
    <div>
      <h1>My State Component</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)} 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && <PropsComponent person={submittedData} />} {}
    </div>
  );
};

export default MyStateComponent;