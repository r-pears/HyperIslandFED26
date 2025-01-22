import EffectsComponent from "./Components/Effect/EffectsComponent";
import "./App.css";
import MyStateComponent from "./Components/StateComponent/MyStateComponent";
import PropsComponent from "./Components/StateComponent/PropsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import MyNavLink from "./Components/MyNavLink/MyNavLink";

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
      <header>
        <h1>This is React</h1>
      </header>
      {/* TODO create a child component in proper jsx, the component takes the person object as props and render the data */}
      <>
        <div className="container">
          <MyNavLink to="/effectsComponent">EffectsComponent</MyNavLink>
          <MyNavLink to="/stateComponent">StateComponent</MyNavLink>
          <MyNavLink to="/stateComponent/123">Go To PropsComponent</MyNavLink>
        </div>
        <Routes>
          <Route index element={<EffectsComponent />} />
          <Route path="/effectsComponent" element={<EffectsComponent />} />
          <Route path="/stateComponent">
            <Route index element={<MyStateComponent />} />
            <Route path=":pid" element={<PropsComponent person={person} />} />
          </Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
