import "./App.css";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";

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
