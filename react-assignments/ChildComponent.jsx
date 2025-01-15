function ChildComponent({ person }) {
    return (
      <>
        <h2>This is a child component</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, libero
          tempora maiores suscipit sed vitae similique, expedita accusantium
          delectus quisquam laboriosam eveniet ab nam eos temporibus itaque,
          placeat magni veniam.
        </p>
        <h2>{person.name}</h2>
        <ul>
          <li>Age: {person.info.age}</li>
          <li>City: {person.info.city}</li>
          <li>Job: {person.info.job}</li>
          <li>
            Hobbies:
            <ul>
              {person.info.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </li>
        </ul>
      </>
    );
  }
  
  export default ChildComponent;
  