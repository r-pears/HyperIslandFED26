import "./App.css";
import Component1 from "./Component/Component1/Component1";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";

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
        <h1>Person Info</h1>
        <Component1 person={person} />
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
    </div>
  );
}

export default App;
