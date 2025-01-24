import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EffectsComponent from "./Components/Effect/EffectsComponent";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
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
    <Router>
      <h1>This is React</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/effects">Effects Component</Link> |{" "}
        <Link to="/state">State Component</Link> |{" "}
        <Link to="/props">Props Component</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h2>Welcome to the React Application!</h2>} />
        <Route path="/effects" element={<EffectsComponent />} />
        <Route path="/state" element={<MyStateComponent />} />
        <Route path="/props" element={<PropsComponent person={person} />} />
      </Routes>
    </Router>
  );
}

export default App;
