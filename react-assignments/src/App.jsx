import "./App.css";
import ChildComponent from "./ChildComponent";
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
      <header>
        <h1>This is React</h1>
      </header>
      {
        ChildComponent( person)
      }
      {
        MyStateComponent()
      }
    </div>
  );
}

export default App;
