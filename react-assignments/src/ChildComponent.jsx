function ChildComponent({ person }) {
    return (
      <>
        <h2>{person.name}</h2>
        <ul>
          <li>Age: {person.info.age}</li>
          <li>City: {person.info.city}</li>
          <li>Job: {person.info.job}</li>
          <li> Hobbies: {person.info.hobbies.join(", ")}</li>
        </ul>
      </>
    );
  }
  
  export default ChildComponent;
  