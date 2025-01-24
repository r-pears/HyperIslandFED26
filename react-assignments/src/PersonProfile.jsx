import React from "react";

function PersonProfile({ person }) {
    return (
      <div>
        <h2>My name is {person.name}</h2>
        <p>I am {person.info.age}</p>
        <p> I live in {person.info.city}</p>
        <p> What i work with:{person.info.job}</p>
        <h3>What i like:</h3>
        <ul>
          {person.info.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default PersonProfile;