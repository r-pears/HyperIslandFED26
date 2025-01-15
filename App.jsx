import "./App.css";

// Child Component with Props
function PersonInfo({ person }) {
  return (
    <div className="person-info">
      <h2>{person.name}</h2>
      <div className="person-details">
        <p><strong>Age:</strong> {person.info.age}</p>
        <p><strong>City:</strong> {person.info.city}</p>
        <p><strong>Job:</strong> {person.info.job}</p>
        
        <h3>Hobbies:</h3>
        <ul>
          {person.info.hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function App() {
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
    <div>
      <header>
        <h1>This is React</h1>
      </header>
      <PersonInfo person={person} />
    </div>
  );
}

export default App;