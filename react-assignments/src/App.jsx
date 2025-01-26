import "./App.css";
import DisplayComponent from "./Components/DisplayComponent.jsx";
import MyStateComponent from "./Components/MyStateComponent/MyStateComponent.jsx";
import EffectsComponent from "./Components/Effect/EffectsComponent.jsx";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

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
    <BrowserRouter>
      <div className="app">
        <header className="app-header">
          <h1>This is React</h1>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="state-component"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              State Component
            </NavLink>
            <NavLink
              to="effects-component"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Effects Component
            </NavLink>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/" element={<DisplayComponent person={person} />} />
            <Route path="state-component" element={<MyStateComponent />} />
            <Route path="effects-component" element={<EffectsComponent />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;