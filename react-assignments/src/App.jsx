import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import Child from "./Child";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import ErrorPage from "./Components/404/ErrorPage";
import { Routes, Route } from "react-router";

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
    <Routes>
      <Route path="myComponent">
          <Route index element={<PropsComponent person={person} />} />
          <Route path="child" element={<Child person={person}/>} />
        </Route>

      <Route path="/effects" element={<EffectsComponent />} />
      <Route path="/myState" element={<MyStateComponent />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}



export default App;
