import React from "react";

function FirstChild({ person }) {
  return (
    <div>
      <h2>Name: {person.name}</h2>
      <ul>
        <li>job:{person.info.job}</li>
        <li>City: {person.info.city}</li>
        <li>
          hobbies:
          <ul>
            {person.info.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default FirstChild;
