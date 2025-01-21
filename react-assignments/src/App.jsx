import "./App.css";
import EffectsComponent from "./Components/Effect/EffectsComponent";

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
      <EffectsComponent />
    </div>
  );
}

export default App;
