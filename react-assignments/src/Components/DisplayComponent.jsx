import React from "react";

function DisplayComponent ({ person }) {
    const { name, info } = person;
  return (
  <div className="container">
    <h2>{name}</h2>
    <span>{info.age}, </span>
    <span>{info.city}, </span>
    <span>{info.job}</span>
    <p>Hobbies: {info.hobbies.map((hobby, index) => (
        <p key={index}>{hobby}</p>
    ))}</p>
  </div>
  );
};

export default DisplayComponent;