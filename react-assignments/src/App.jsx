import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import Component1 from "./Components/MyStateComponent/Component1";

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

  //  TODO ad routes to the components we've created so far
  return (
    <div>
        <h1>Person Info</h1>
      <Component1 person={person} />
      <PropsComponent person={person} />
      <MyStateComponent />
      <EffectsComponent />
    </div>
  );
}

export default App;
