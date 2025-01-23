import React from "react";

function PropsComponent(props) {
  const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  };
  return (
    <>
      <h2>Welcome {props.person.name}!</h2>
      <p>{props.person.info.age}</p>
      {Object.keys(props.person.info).map((key) => (
        <div key={key}>
          <h3>{key}</h3>
          {Array.isArray(props.person.info[key]) ? (
            <ul>
              {props.person.info[key].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{props.person.info[key]}</p>
          )}
        </div>
      ))}
    </>
  );
}

export default PropsComponent;
