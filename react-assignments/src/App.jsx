import "./App.css";
import Child from "./Child";

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
      <Child person={person}/>
    </div>
  );
}

export default App;
