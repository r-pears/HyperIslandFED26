import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent";
import PropsComponent from "./Components/MyStateComponent/PropsComponent";
import { BrowserRouter, Routes, Route } from "react-router";
import { NavLink } from "react-router";
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
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="/PropsComponent">Props Component</NavLink>
            </li>
            <li>
              <NavLink to="/MyStateComponent">MyState Component</NavLink>
            </li>
            <li>
              <NavLink to="/EffectsComponent">Effects Component</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/PropsComponent"
            element={<PropsComponent person={person} />}
          />
          <Route path="/MyStateComponent" element={<MyStateComponent />} />
          <Route path="/EffectsComponent" element={<EffectsComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
