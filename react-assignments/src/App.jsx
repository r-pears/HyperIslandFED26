import "./App.css";
/* import "./component/PersonInfo.css" */
import MyFormComponent from "./Components/MyStateComponent/MyStateComponent.jsx";
import "./Components/MyStateComponent/MyStateComponent.css";
/* import PersonInfo from "./component/PersonInfo"; */

import PropsComponent from "./Components/MyStateComponent/PropsComponent";

function App() {
/*   const person = {
    name: "John",
    info: {
      age: 25,
      city: "New York",
      job: "Developer",
      hobbies: ["reading", "coding", "gaming"],
    },
  }; */
  console.log("App component rendered");

  return (
    <div>
      <MyFormComponent />
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
      <PropsComponent person={person} />
    </div>
  );
}

export default App;
