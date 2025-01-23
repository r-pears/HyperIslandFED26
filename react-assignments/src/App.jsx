import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Component1 from "./Components/MyStateComponent/Component1";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";

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
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/component1">Component 1</Link>
          </li>
          <li>
            <Link to="/propscomponent">Props Component</Link>
          </li>
          <li>
            <Link to="/mystatecomponent">My State Component</Link>
          </li>
          <li>
            <Link to="/effectscomponent">Effects Component</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/component1" element={<Component1 person={person} />} />
        <Route path="/propscomponent" element={<PropsComponent person={person} />} />
        <Route path="/mystatecomponent" element={<MyStateComponent />} />
        <Route path="/effectscomponent" element={<EffectsComponent />} />
      </Routes>
    </div>
  );
}

export default App;
