import React from 'react';

const PersonComponent = ({ person }) => {
  return (
    <div>
      <h2>Person Details</h2>
      <p>Name: {person.name}</p>
      <p>Age: {person.info.age}</p>
      <p>City: {person.info.city}</p>
      <p>Job: {person.info.job}</p>
    </div>
  );
};

export default PersonComponent;