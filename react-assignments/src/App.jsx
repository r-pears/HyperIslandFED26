import React from "react"; 
import EffectsComponent from "./Components/Effect/EffectsComponent";
import FetchComponent from "./Components/Effect/EffectsComponent.jsx";
import "./App.css";
import "./component/PersonInfo.css"
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent.jsx";
import "./Components/MyStateComponent/MyStateComponent.css";
/* import PersonInfo from "./component/PersonInfo"; */
import Nav from "./Components/nav/nav.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PropsComponent from "./Components/MyStateComponent/PropsComponent.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import ErrorPage from "./Components/404/ErrorPage.jsx";


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
      <>
        <Nav />
        <Routes>
          <Route index element={<Homepage />}/>
          <Route path="/fetch" element={<FetchComponent />}/>

          <Route path="/effects" element={<EffectsComponent />}/>
          <Route path="/state" element={<MyStateComponent />}/>
          <Route path="/person" element={<PropsComponent person={person} />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
    </div>
  );
}

export default App;
