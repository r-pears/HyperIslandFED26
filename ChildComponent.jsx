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
        <h2>{person?.name || "Name not provided"}</h2>
        <ul>
          <li>Age: {person?.info?.age || "Age not provided"}</li>
          <li>City: {person?.info?.city || "City not provided"}</li>
          <li>Job: {person?.info?.job || "Job not provided"}</li>
          <li>
            Hobbies:
            <ul>
              {person?.info?.hobbies?.length > 0 ? (
                person.info.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))
              ) : (
                <li>No hobbies provided</li>
              )}
            </ul>
          </li>
        </ul>
      </>
    );
  }
  
  export default ChildComponent;
  